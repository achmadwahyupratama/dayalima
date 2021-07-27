const isPossible = require('../index')

describe('Combining clothes', () => {
  it('should return true when it is possible for no one wear the same cloth', () => {
    const result = isPossible({
      "0": ['JakartaJS'],
      "1": ['AWSome Day', 'Elixir'],
      "2": ['GoJakarta', 'Elixir']
    })
    expect(typeof result).toBe('string');
    expect(result).toMatch("true. Example of possible combination: [\"JakartaJS\",\"AWSome Day\",\"Elixir\",\"GoJakarta\"]");

    const result2 = isPossible({
      "0": ['JakartaJS', 'Elixir'],
      "1": ['Elixir'],
      "2": ['JakartaJS', 'Elixir']
    })
    expect(result2).toBe(false);
  });
});