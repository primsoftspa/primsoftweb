/**
 * 
 * @param mail Ej: usuario@mail.com
 * @param subject Ej: Cotizar
 * @returns 
 */

export const mailTo = (mail: string, subject: string) => {
  return `mailto:${mail}?subject=${subject}`
}

/**
 * 
 * @param phone Ej: 56974455373
 * @param text Ej: Consulta
 * @returns 
 */
export const whatsAppTo = (phone: string, text: string) => {
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${text}&app_absent=0`
}