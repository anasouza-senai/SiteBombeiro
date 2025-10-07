import styles from './BotaoTrocaCor.module.css'

const BotaoTrocaCor = ({troca, isLight}) => {
  return (
    <div className={isLight ? styles.light : ""}>
    <div onClick={troca} id={styles.switch}>
      <button></button>
      <span></span>
    </div>
    </div>
  )
}

export default BotaoTrocaCor
