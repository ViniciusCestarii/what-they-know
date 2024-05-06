export type Confidence = 'Very High' | 'High' | 'Moderate' | 'Low'

export type Company = {
  company: {
    domain: string
    name: string
    region: string
    country: string
    state: string
    city: string
    industry: string
    country_iso_code: string
    address: string
    zip: string
    phone: string
    employee_range: string
    revenue_range: string
    employee_count: string
    annual_revenue: string
    is_blacklisted: boolean
    state_code: string
    is_6qa: boolean
    geoIP_country: string
    geoIP_state: string
    geoIP_city: string
    company_match: string
    additional_comment: string
    industry_v2: Array<object>
    sic_description: string
    sic: string
    naics: string
    naics_description: string
  }
  scores: Array<unknown>
  segments: {
    ids: Array<unknown>
    names: Array<unknown>
    list: Array<unknown>
  }
  confidence: Confidence
}
