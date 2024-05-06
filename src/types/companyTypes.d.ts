export type Company = {
  company: {
    domain: string;
    name: string;
    region: string;
    country: string;
    state: string;
    city: string;
    industry: string;
    country_iso_code: string;
    address: string;
    zip: string;
    phone: string;
    employee_range: string;
    revenue_range: string;
    employee_count: string;
    annual_revenue: string;
    is_blacklisted: boolean;
    state_code: string;
    is_6qa: boolean;
    geoIP_country: string;
    geoIP_state: string;
    geoIP_city: string;
    company_match: string;
    additional_comment: string;
    industry_v2: Array<object>;
    sic_description: string;
    sic: string;
    naics: string;
    naics_description: string;
  };
  scores: Array<any>;
  segments: {
    ids: Array<any>;
    names: Array<any>;
    list: Array<any>;
  };
  confidence: 'Very' | 'High' | 'High' | 'Moderate' | 'Low'
};