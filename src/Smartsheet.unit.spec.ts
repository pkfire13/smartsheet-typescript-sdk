import { beforeEach, describe, expect, it } from 'vitest'
import { Smartsheet } from './Smartsheet'

let smartsheet: Smartsheet
describe('Smartsheet SDK', () => {
  beforeEach(() => {
    smartsheet = new Smartsheet()
  })

  describe('init', () => {
    it('should initialize', () => {
      expect(smartsheet).toBeDefined()
    })
  })
})
