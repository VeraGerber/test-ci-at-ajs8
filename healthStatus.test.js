const getHealthStatus = require('./healthStatus');

describe('getHealthStatus', () => {
  test('should return healthy for health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Арcher', health: 51 })).toBe('healthy');
  });

  test('should return wounded for health between 15 and 50 inclusive', () => {
    expect(getHealthStatus({ name: 'Warrior', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Rogue', health: 15 })).toBe('wounded');
  });

  test('should return critical for health < 15', () => {
    expect(getHealthStatus({ name: 'Mage', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Paladin', health: 0 })).toBe('critical');
  });
});