import './footer.css'

export const Footer = () => {
  const footer = document.querySelector('footer')
  const divFooter = document.createElement('div')
  footer.append(divFooter)
  divFooter.className = 'divFooter'
  const pFooter = document.createElement('p')
  pFooter.innerText = '©️ Created by Ariadna Lopez'
  divFooter.append(pFooter)
  pFooter.className = 'pFooter'
}