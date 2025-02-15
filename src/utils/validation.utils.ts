// Exemplo de validações genéricas

export function isEmailValid(email: string): boolean {
  // Regex simples
  return /\S+@\S+\.\S+/.test(email);
}
