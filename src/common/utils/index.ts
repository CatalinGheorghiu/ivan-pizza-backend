export function fieldTypeMessage(field: string, type: string) {
  return `${field} field must be of type ${type}!`;
}

export function emptyFieldMessage(field: string) {
  return `${field} field can not be empty!`;
}

export function minLengthMessage(field: string, length: number) {
  return `${field} field must have at least ${length} characters!`;
}

export function maxLengthMessage(field: string, length: number) {
  return `${field} field can not exceed ${length} characters!`;
}
