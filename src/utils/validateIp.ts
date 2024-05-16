export function isValidIP(ip: string) {
  const ipRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/
  return ipRegex.test(ip)
}
