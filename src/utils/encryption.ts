// 这是一个简单的加密/解密示例，实际应用中应使用更安全的方法
export function encryptData(data: any): string {
  return btoa(JSON.stringify(data));
}

export function decryptData(encryptedData: string): any {
  return JSON.parse(atob(encryptedData));
}