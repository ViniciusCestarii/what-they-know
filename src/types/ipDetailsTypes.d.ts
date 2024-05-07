export type IpDetails = {
  input: string
  data: {
    ip: string
    hostname: string
    city: string
    region: string
    country: string
    loc: string
    org: string
    postal: string
    timezone: string
    asn: {
      asn: string
      name: string
      domain: string
      route: string
      type: string
    }
    company: {
      name: string
      domain: string
      type: string
    }
    privacy: {
      vpn: boolean
      proxy: boolean
      tor: boolean
      relay: boolean
      hosting: boolean
      service: string
    }
    abuse: {
      address: string
      country: string
      email: string
      name: string
      network: string
      phone: string
    }
  }
}

export type IpInfoDetails = {
  input: string
  data: {
    ip: string
    hostname: string
    city: string
    region: string
    country: string
    loc: string
    org: string
    postal: string
    timezone: string
    asn: {
      asn: string
      name: string
      domain: string
      route: string
      type: string
    }
    company: {
      name: string
      domain: string
      type: string
    }
    privacy: {
      vpn: boolean
      proxy: boolean
      tor: boolean
      relay: boolean
      hosting: boolean
      service: string
    }
    abuse: {
      address: string
      country: string
      email: string
      name: string
      network: string
      phone: string
    }
  }
}
