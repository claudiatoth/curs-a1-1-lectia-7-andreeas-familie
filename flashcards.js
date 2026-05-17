// ============================================
// FLASHCARDS - Lecția 7: Andreeas Familie
// Claudia Toth · A1.1 · 32 carduri
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 10 membri familie ===
    { de: "der Vater", ro: "tatăl · Ion ist Andreeas Vater · der = masculin", audio: "audio/letters/der-vater.wav" },
    { de: "die Mutter", ro: "mama · Maria ist Andreeas Mutter · die = feminin", audio: "audio/letters/die-mutter.wav" },
    { de: "der Bruder", ro: "fratele · Andrei ist der Bruder · der = masculin", audio: "audio/letters/der-bruder.wav" },
    { de: "die Schwester", ro: "sora · Elena ist die Schwester · die = feminin", audio: "audio/letters/die-schwester.wav" },
    { de: "der Opa", ro: "bunicul · der Großvater · der = masculin", audio: "audio/letters/der-opa.wav" },
    { de: "die Oma", ro: "bunica · die Großmutter · die = feminin", audio: "audio/letters/die-oma.wav" },
    { de: "der Onkel", ro: "unchiul · Vasile ist der Onkel · der = masculin", audio: "audio/letters/der-onkel.wav" },
    { de: "die Tante", ro: "mătușa · Ana ist die Tante · die = feminin", audio: "audio/letters/die-tante.wav" },
    { de: "die Eltern", ro: "părinții · Ion und Maria sind die Eltern · doar plural", audio: "audio/letters/die-eltern.wav" },
    { de: "die Großeltern", ro: "bunicii · Oma und Opa · doar plural", audio: "audio/letters/die-grosseltern.wav" },

    // === 6 lucruri pe gen (capcana das Kind) ===
    { de: "das Kind", ro: "copilul · CAPCANĂ: e NEUTRU, nu masculin! · das", audio: "audio/letters/das-kind.wav" },
    { de: "das Buch", ro: "cartea · das = neutru · plural: die Bücher", audio: "audio/letters/das-buch.wav" },
    { de: "der Tisch", ro: "masa · der = masculin", audio: "audio/letters/der-tisch.wav" },
    { de: "die Lampe", ro: "lampa · die = feminin", audio: "audio/letters/die-lampe.wav" },
    { de: "der Stuhl", ro: "scaunul · der = masculin", audio: "audio/letters/der-stuhl.wav" },
    { de: "die Uhr", ro: "ceasul · die = feminin (în română e masculin!)", audio: "audio/letters/die-uhr.wav" },

    // === 8 Berufe — perechi masculin / feminin ===
    { de: "der Lehrer / die Lehrerin", ro: "profesor / profesoară · Annette ist Lehrerin", audio: "audio/letters/lehrer-in.wav" },
    { de: "der Koch / die Köchin", ro: "bucătar / bucătăreasă · Mihai ist Koch · o devine ö", audio: "audio/letters/koch-koechin.wav" },
    { de: "der Arzt / die Ärztin", ro: "medic · Florian ist Arzt · a devine ä", audio: "audio/letters/arzt-aerztin.wav" },
    { de: "der Student / die Studentin", ro: "student / studentă · Andreea ist Studentin", audio: "audio/letters/student-in.wav" },
    { de: "der Ingenieur / die Ingenieurin", ro: "inginer / ingineră · Andreeas Vater ist Ingenieur", audio: "audio/letters/ingenieur-in.wav" },
    { de: "der Fotograf / die Fotografin", ro: "fotograf / fotografă · Carolina ist Fotografin", audio: "audio/letters/fotograf-in.wav" },
    { de: "der Mechaniker / die Mechanikerin", ro: "mecanic · regula masculin + -in = feminin", audio: "audio/letters/mechaniker-in.wav" },
    { de: "der Vorarbeiter / die Vorarbeiterin", ro: "șef de echipă · Acar ist Vorarbeiter", audio: "audio/letters/vorarbeiter-in.wav" },

    // === 4 sistemul articolelor ===
    { de: "der · die · das", ro: "articolul HOTĂRÂT · ceva cunoscut sau deja menționat", audio: "audio/letters/der-die-das.wav" },
    { de: "ein · eine · ein", ro: "articolul NEHOTĂRÂT · ceva necunoscut sau prima dată", audio: "audio/letters/ein-eine-ein.wav" },
    { de: "kein · keine · kein", ro: "NEGAȚIA lui ein · Das ist kein Buch", audio: "audio/letters/kein-keine-kein.wav" },
    { de: "Was bist du von Beruf?", ro: "Ce meserie ai? · răspuns FĂRĂ articol: Ich bin Koch", audio: "audio/letters/was-beruf.wav" },

    // === 4 posesive + marea sinteză ===
    { de: "mein · meine · mein", ro: "al meu / a mea · urmează EXACT formele lui ein", audio: "audio/letters/mein-meine.wav" },
    { de: "dein · deine · dein", ro: "al tău / a ta · Wie heißt dein Vater?", audio: "audio/letters/dein-deine.wav" },
    { de: "der den · ein einen · kein keinen · mein meinen", ro: "MAREA SINTEZĂ · doar masculinul la Akkusativ primește -en", audio: "audio/letters/sinteza-akk.wav" },
    { de: "Mein Vater heißt Ion.", ro: "Tatăl meu se numește Ion · mein + masculin", audio: "audio/letters/mein-vater.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (10 familie · 6 lucruri pe gen · 8 Berufe perechi · 4 sistemul articolelor · 4 posesive + sinteză).<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

buildFlashcards();
