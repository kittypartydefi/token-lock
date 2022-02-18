import cls from "./GnosisLogo.module.css"

const GnosisLogo: React.FC = () => (
  <div className={cls.container}>
    <img
      className={cls.logo}
      src="/kp-logo.png"
      alt="Gnosis Logo"
      width={200}
    />
  </div>
)

export default GnosisLogo
