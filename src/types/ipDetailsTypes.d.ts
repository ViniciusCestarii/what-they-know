export type IpDetails = {
  status: string
  demoInfo: {
    error?: {
      message: string
    }
    ipAddress: string
    continentCode: string
    continentName: string
    countryCode: string
    countryName: string
    isEuMember: boolean
    currencyCode: string
    currencyName: string
    phonePrefix: string
    languages: string[]
    stateProvCode: string
    stateProv: string
    district: string
    city: string
    geonameId: number
    latitude: number
    longitude: number
    gmtOffset: number
    timeZone: string
    weatherCode: string
    asNumber: number
    asName: string
    isp: string
    usageType: string
    organization: string
    isCrawler: boolean
    isProxy: boolean
    threatLevel: string
  }
}
