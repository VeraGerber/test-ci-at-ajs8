

/**
 * Определяет состояние персонажа по уровню здоровья.
 * @param {Object} character - объект с свойствами name и health
 * @returns {string} - 'healthy', 'wounded' или 'critical'
 */
function getHealthStatus(character) {
  const { health } = character;
  
  if (health > 50) {
    return 'healthy';
  } else if (health >= 15 && health <= 50) {
    return 'wounded';
  } else {
    // health < 15
    return 'critical';
  }
}

module.exports = getHealthStatus;