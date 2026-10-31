/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  const freq = new Uint16Array(26),
    base = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - base]++;
    freq[t.charCodeAt(i) - base]--;
  }

  for (let i = 0; i < 26; i++) {
    if (freq[i] != 0) return false;
  }

  return true;
};