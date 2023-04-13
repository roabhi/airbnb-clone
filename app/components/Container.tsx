'use client'

interface ConatainerProps {
  children: React.ReactNode
}

const Container: React.FC<ConatainerProps> = ({ children }) => {
  return (
    <div
      className="
        max-w-[157.500rem]
        mx-auto
        xl:px-20
        md:ps-10
        sm:px-2
        px-4
    "
    >
      {children}
    </div>
  )
}

export default Container
