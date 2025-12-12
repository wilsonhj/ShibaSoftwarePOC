#!/usr/bin/env node

/**
 * Worker Size Check Script
 * 
 * Checks the size of the generated Cloudflare Worker bundle and warns
 * if it approaches the platform limits:
 * - Free tier: 3 MiB (3,145,728 bytes)
 * - Paid tier: 10 MiB (10,485,760 bytes)
 */

import { statSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

const WORKER_PATH = join(projectRoot, '.open-next', 'worker.js')

// Size limits in bytes
const FREE_TIER_LIMIT = 3 * 1024 * 1024 // 3 MiB
const PAID_TIER_LIMIT = 10 * 1024 * 1024 // 10 MiB
const WARNING_THRESHOLD = 0.8 // Warn at 80% of limit

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function main() {
  console.log('\n📦 Cloudflare Worker Size Check\n')
  console.log('=' .repeat(50))

  if (!existsSync(WORKER_PATH)) {
    console.error(`\n❌ Worker bundle not found at: ${WORKER_PATH}`)
    console.error('   Run "npm run build:cf" first.\n')
    process.exit(1)
  }

  const stats = statSync(WORKER_PATH)
  const size = stats.size
  const freePercent = ((size / FREE_TIER_LIMIT) * 100).toFixed(1)
  const paidPercent = ((size / PAID_TIER_LIMIT) * 100).toFixed(1)

  console.log(`\nWorker bundle: ${WORKER_PATH}`)
  console.log(`Size: ${formatBytes(size)}`)
  console.log('')
  console.log(`Free tier (3 MiB):  ${freePercent}% used`)
  console.log(`Paid tier (10 MiB): ${paidPercent}% used`)
  console.log('')

  // Check against limits
  if (size > FREE_TIER_LIMIT) {
    console.error('❌ EXCEEDS FREE TIER LIMIT!')
    console.error('   You need a paid Cloudflare Workers plan to deploy this bundle.\n')
    
    if (size > PAID_TIER_LIMIT) {
      console.error('❌ EXCEEDS PAID TIER LIMIT!')
      console.error('   Bundle is too large for Cloudflare Workers.\n')
      process.exit(1)
    }
    
    process.exit(1)
  }

  if (size > FREE_TIER_LIMIT * WARNING_THRESHOLD) {
    console.warn('⚠️  WARNING: Approaching free tier limit!')
    console.warn('   Consider optimizing bundle size or upgrading to paid plan.\n')
    process.exit(0)
  }

  console.log('✅ Worker size is within free tier limits.\n')
  
  // Show assets size too
  const assetsDir = join(projectRoot, '.open-next', 'assets')
  if (existsSync(assetsDir)) {
    const totalAssetsSize = getDirectorySize(assetsDir)
    console.log(`Static assets: ${formatBytes(totalAssetsSize)}`)
    console.log(`Total output: ${formatBytes(size + totalAssetsSize)}\n`)
  }
}

function getDirectorySize(dirPath) {
  let size = 0
  const items = readdirSync(dirPath, { withFileTypes: true })
  
  for (const item of items) {
    const itemPath = join(dirPath, item.name)
    if (item.isDirectory()) {
      size += getDirectorySize(itemPath)
    } else {
      size += statSync(itemPath).size
    }
  }
  
  return size
}

import { readdirSync } from 'fs'

main()

