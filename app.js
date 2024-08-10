function calculateScore() {
    
    const name = document.getElementById('name').value;

    // Puan değişkeni
    let score = 0;

    // Soru 1'in cevabını kontrol et
    if (document.querySelector('input[name="question1"]:checked')?.value === 'correct') {
        score += 1;
    }

    // Soru 2'nin cevabını kontrol et
    if (document.querySelector('input[name="question2"]:checked')?.value === 'correct') {
        score += 1;
    }

    // Soru 3 (Sözel soru) cevabını kontrol et
    const question3Answer = document.getElementById('question3').value.toLowerCase();
    if (question3Answer.includes('min') && question3Answer.includes('max')) {
        score += 1;
    }

    // Kullanıcının mevcut puanını göster
    document.getElementById('result').innerHTML = `Tebrikler ${name}, Puanınız: ${score}/3`;

    // Tarayıcıda saklanan en yüksek puanı al
    let highestScore = localStorage.getItem('highestScore') || 0;

    
    if (score > highestScore) {
        highestScore = score;
        localStorage.setItem('highestScore', highestScore);
    }

    
    document.getElementById('highestScore').innerHTML = `En Yüksek Puan: ${highestScore}`;
}

// Sayfa yüklendiğinde en yüksek puanı göster
document.addEventListener('DOMContentLoaded', function() {
    let highestScore = localStorage.getItem('highestScore') || 0;
    document.getElementById('highestScore').innerHTML = `En Yüksek Puan: ${highestScore}`;
});
