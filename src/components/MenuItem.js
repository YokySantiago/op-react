'use client'

export default function MenuItem(props) {
  const { className, label, link } = props
  return (
    <a className={className} href={link}>{label}</a>
  )

}