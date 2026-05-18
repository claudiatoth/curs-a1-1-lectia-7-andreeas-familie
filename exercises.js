// ============================================
// EXERCIȚII - Lecția 7: Andreeas Familie
// Claudia Toth · A1.1 · 5 exerciții (toate text inputs)
// Sursă DF: 40 (Familie), 14 (Berufe), 15-16 (Artikel im Singular), WS25, WS34
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: Articolul hotărât der/die/das — Familie
// ============================================
const ex1Data = [
    { id: 'a', sentence: '____ Vater (tatăl) heißt Ion.', translation: 'Tatăl se numește Ion.', correct: 'der', accept: ['der'] },
    { id: 'b', sentence: '____ Mutter (mama) ist Lehrerin.', translation: 'Mama e profesoară.', correct: 'die', accept: ['die'] },
    { id: 'c', sentence: '____ Kind (copilul) spielt.', translation: 'Copilul se joacă. (atenție: neutru!)', correct: 'das', accept: ['das'] },
    { id: 'd', sentence: '____ Bruder (fratele) ist Student.', translation: 'Fratele e student.', correct: 'der', accept: ['der'] },
    { id: 'e', sentence: '____ Schwester (sora) ist Ärztin.', translation: 'Sora e medic.', correct: 'die', accept: ['die'] },
    { id: 'f', sentence: '____ Großvater (bunicul) heißt Gheorghe.', translation: 'Bunicul se numește Gheorghe.', correct: 'der', accept: ['der'] },
    { id: 'g', sentence: '____ Oma (bunica) wohnt in Rumänien.', translation: 'Bunica locuiește în România.', correct: 'die', accept: ['die'] },
    { id: 'h', sentence: '____ Tante (mătușa) heißt Ana.', translation: 'Mătușa se numește Ana.', correct: 'die', accept: ['die'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>👨‍👩‍👧‍👦 Completează articolul hotărât: der, die sau das?</strong><br>
            Truc: der pentru bărbați (der Vater), die pentru femei (die Mutter).<br>
            <em>💡 Atenție la capcană: das Kind (copilul) e NEUTRU, nu masculin!</em>
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex1-${item.id}" placeholder="der / die / das">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Articolul nehotărât ein/eine — Familie + lucruri
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Das ist ____ Vater. (m)', translation: 'Acesta e un tată.', correct: 'ein', accept: ['ein'] },
    { id: 'b', sentence: 'Das ist ____ Mutter. (f)', translation: 'Aceasta e o mamă.', correct: 'eine', accept: ['eine'] },
    { id: 'c', sentence: 'Das ist ____ Kind. (n)', translation: 'Acesta e un copil.', correct: 'ein', accept: ['ein'] },
    { id: 'd', sentence: 'Das ist ____ Buch. (n)', translation: 'Aceasta e o carte.', correct: 'ein', accept: ['ein'] },
    { id: 'e', sentence: 'Das ist ____ Lampe. (f)', translation: 'Aceasta e o lampă.', correct: 'eine', accept: ['eine'] },
    { id: 'f', sentence: 'Das ist ____ Tisch. (m)', translation: 'Aceasta e o masă.', correct: 'ein', accept: ['ein'] },
    { id: 'g', sentence: 'Andreea hat ____ Schwester. (f)', translation: 'Andreea are o soră.', correct: 'eine', accept: ['eine'] },
    { id: 'h', sentence: 'Mihai hat ____ Buch. (n)', translation: 'Mihai are o carte.', correct: 'ein', accept: ['ein'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔵 Completează articolul nehotărât: ein sau eine?</strong><br>
            Masculin (m) și neutru (n) → <strong>ein</strong> · Feminin (f) → <strong>eine</strong>.<br>
            <em>💡 Genul e indicat în paranteză după fiecare substantiv.</em>
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex2-${item.id}" placeholder="ein / eine">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Negația kein/keine — Nein, das ist ...
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Ist das ein Buch? — Nein, das ist ____ Buch. (n)', translation: 'E o carte? — Nu, nu e o carte.', correct: 'kein', accept: ['kein'] },
    { id: 'b', sentence: 'Ist das eine Lampe? — Nein, das ist ____ Lampe. (f)', translation: 'E o lampă? — Nu, nu e o lampă.', correct: 'keine', accept: ['keine'] },
    { id: 'c', sentence: 'Ist das ein Tisch? — Nein, das ist ____ Tisch. (m)', translation: 'E o masă? — Nu, nu e o masă.', correct: 'kein', accept: ['kein'] },
    { id: 'd', sentence: 'Ist das eine Uhr? — Nein, das ist ____ Uhr. (f)', translation: 'E un ceas? — Nu, nu e un ceas.', correct: 'keine', accept: ['keine'] },
    { id: 'e', sentence: 'Ist das ein Heft? — Nein, das ist ____ Heft. (n)', translation: 'E un caiet? — Nu, nu e un caiet.', correct: 'kein', accept: ['kein'] },
    { id: 'f', sentence: 'Ist Mihai ein Arzt? — Nein, Mihai ist ____ Arzt. (m)', translation: 'E Mihai medic? — Nu, Mihai nu e medic.', correct: 'kein', accept: ['kein'] },
    { id: 'g', sentence: 'Ist Andreea eine Lehrerin? — Nein, sie ist ____ Lehrerin. (f)', translation: 'E Andreea profesoară? — Nu, ea nu e profesoară.', correct: 'keine', accept: ['keine'] },
    { id: 'h', sentence: 'Hat Andreea einen Bruder? — Nein, sie hat ____ Bruder. (Akk. m!)', translation: 'Are Andreea un frate? — Nu, nu are (niciun) frate.', correct: 'keinen', accept: ['keinen'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>❌ Răspunde negativ cu kein / keine / keinen.</strong><br>
            kein urmează formele lui ein: ein → kein, eine → keine.<br>
            <em>💡 Ultima e capcana de aur: după „haben" e Akkusativ → la masculin devine keinen!</em>
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="kein / keine / keinen">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Berufe — formează femininul (-in) + fără articol
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'der Lehrer → die ____', translation: 'profesor → profesoară', correct: 'Lehrerin', accept: ['lehrerin'] },
    { id: 'b', sentence: 'der Student → die ____', translation: 'student → studentă', correct: 'Studentin', accept: ['studentin'] },
    { id: 'c', sentence: 'der Koch → die ____ (atenție: o → ö)', translation: 'bucătar → bucătăreasă', correct: 'Köchin', accept: ['köchin', 'koechin'] },
    { id: 'd', sentence: 'der Arzt → die ____ (atenție: a → ä)', translation: 'medic (m) → medic (f)', correct: 'Ärztin', accept: ['ärztin', 'aerztin'] },
    { id: 'e', sentence: 'Annette ist ____ von Beruf. (profesoară — fără articol!)', translation: 'Annette e profesoară.', correct: 'Lehrerin', accept: ['lehrerin'] },
    { id: 'f', sentence: 'Mihai ist ____ von Beruf. (bucătar)', translation: 'Mihai e bucătar.', correct: 'Koch', accept: ['koch'] },
    { id: 'g', sentence: 'Carolina ist ____ von Beruf. (fotografă)', translation: 'Carolina e fotografă.', correct: 'Fotografin', accept: ['fotografin'] },
    { id: 'h', sentence: 'Andreeas Mutter ist ____ von Beruf. (profesoară)', translation: 'Mama Andreei e profesoară.', correct: 'Lehrerin', accept: ['lehrerin'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💼 Formează femininul meseriei sau completează profesia.</strong><br>
            Regula: masculin + <strong>-in</strong> = feminin (der Lehrer → die Lehrerin). Uneori apare Umlaut (Koch → Köchin).<br>
            <em>💡 După „ist ... von Beruf" NU se pune articol: „Annette ist Lehrerin" (NU eine Lehrerin).</em>
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="meseria...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: mein / dein (+ sinteza Akkusativ meinen)
// ============================================
const ex5Data = [
    { id: 'a', sentence: '— Wie heißt dein Vater? — ____ Vater heißt Ion. (al meu, m)', translation: 'Cum se numește tatăl tău? — Tatăl meu se numește Ion.', correct: 'Mein', accept: ['mein'] },
    { id: 'b', sentence: '— Was ist deine Mutter von Beruf? — ____ Mutter ist Lehrerin. (a mea, f)', translation: 'Ce meserie are mama ta? — Mama mea e profesoară.', correct: 'Meine', accept: ['meine'] },
    { id: 'c', sentence: '— Ist das ____ Buch? — Ja, das ist mein Buch. (al tău, n)', translation: 'Aceasta e cartea ta? — Da, e cartea mea.', correct: 'dein', accept: ['dein'] },
    { id: 'd', sentence: '— Wie heißt ____ Schwester? — Meine Schwester heißt Elena. (a ta, f)', translation: 'Cum se numește sora ta? — Sora mea se numește Elena.', correct: 'deine', accept: ['deine'] },
    { id: 'e', sentence: '____ Oma wohnt in Rumänien. (bunica mea, f)', translation: 'Bunica mea locuiește în România.', correct: 'Meine', accept: ['meine'] },
    { id: 'f', sentence: '____ Bruder ist Student. (fratele meu, m)', translation: 'Fratele meu e student.', correct: 'Mein', accept: ['mein'] },
    { id: 'g', sentence: 'Ich suche ____ Bruder. (pe fratele meu — Akk. m!)', translation: 'Îmi caut fratele.', correct: 'meinen', accept: ['meinen'] },
    { id: 'h', sentence: 'Ich habe ____ Vater sehr gern. (pe tatăl meu — Akk. m)', translation: 'Țin foarte mult la tatăl meu.', correct: 'meinen', accept: ['meinen'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🤝 Completează cu mein / meine / dein / deine (sau meinen la Akkusativ).</strong><br>
            mein urmează exact formele lui ein: ein → mein, eine → meine.<br>
            <em>💡 Marea sinteză: după verbe ca „suchen / haben" e Akkusativ → la masculin devine meinen!</em>
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="mein / meine / dein / deine / meinen">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// Build all exercises on load
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
