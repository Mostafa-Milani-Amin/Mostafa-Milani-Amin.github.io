let abjadMatrix = {
  أ: 1,
  إ: 1,
  ا: 1,
  آ: 1,
  ؤ: 1,
  ء: 1,
  ئ: 1,
  ب: 2,
  پ: 2,
  ج: 3,
  چ: 3,
  د: 4,
  ه: 5,
  ہ: 5,
  ة: 5,
  ۃ: 5,
  ۂ: 5,
  ۀ: 5,
  ھ: 5,
  ﮥ: 5,
  و: 6,
  ز: 7,
  ژ: 7,
  ح: 8,
  ط: 9,
  ي: 10,
  ی: 10,
  ك: 20,
  ک: 20,
  گ: 20,
  ل: 30,
  م: 40,
  ن: 50,
  س: 60,
  ع: 70,
  ف: 80,
  ص: 90,
  ق: 100,
  ر: 200,
  ش: 300,
  ت: 400,
  ث: 500,
  خ: 600,
  ذ: 700,
  ض: 800,
  ظ: 900,
  غ: 1000,
};

function calculateAll(str) {
  sum = 0;
  for (let i = 0; i < str.length; i++) {
    let letterValue = abjadMatrix[str.[i]];
    sum += letterValue ? letterValue : 0;
  }
  return sum;
}
