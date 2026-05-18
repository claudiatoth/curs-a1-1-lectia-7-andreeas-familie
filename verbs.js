// ============================================
// VERB-KONJUGATION - Lecția 7 A1.1: Andreeas Familie
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// L7 NU introduce verbe noi (gramatică: der/die/das + posesive). Regula
// „nicio lecție fără verbe": spielen (din pool neconjugat L3) + haben (recap tematic).
// Präteritum → RO imperfect · REGULĂ: NU backticks, NU ghilimele interne!
// ============================================

const verbsData = [
    {
        inf: 'spielen', ro: 'a juca / a cânta (instrument)', typ: 'slab / regulat', aux: 'haben', part: 'gespielt',
        praes: [['ich','spiele','joc'],['du','spielst','joci'],['er/sie/es','spielt','joacă'],['wir','spielen','jucăm'],['ihr','spielt','jucați'],['sie/Sie','spielen','joacă']],
        praet: [['ich','spielte','jucam'],['du','spieltest','jucai'],['er/sie/es','spielte','juca'],['wir','spielten','jucam'],['ihr','spieltet','jucați'],['sie/Sie','spielten','jucau']],
        perf: [['ich','habe gespielt','am jucat'],['du','hast gespielt','ai jucat'],['er/sie/es','hat gespielt','a jucat'],['wir','haben gespielt','am jucat'],['ihr','habt gespielt','ați jucat'],['sie/Sie','haben gespielt','au jucat']],
        note: 'Verb-model slab/regulat. Și „a cânta la un instrument": Andreea spielt Klavier.'
    },
    {
        inf: 'haben', ro: 'a avea', typ: 'auxiliar / neregulat', aux: 'haben', part: 'gehabt', recap: 'L2 / L4',
        praes: [['ich','habe','am'],['du','hast','ai'],['er/sie/es','hat','are'],['wir','haben','avem'],['ihr','habt','aveți'],['sie/Sie','haben','au']],
        praet: [['ich','hatte','aveam'],['du','hattest','aveai'],['er/sie/es','hatte','avea'],['wir','hatten','aveam'],['ihr','hattet','aveați'],['sie/Sie','hatten','aveau']],
        perf: [['ich','habe gehabt','am avut'],['du','hast gehabt','ai avut'],['er/sie/es','hat gehabt','a avut'],['wir','haben gehabt','am avut'],['ihr','habt gehabt','ați avut'],['sie/Sie','haben gehabt','au avut']],
        note: 'Tematic L7: „Andreea hat einen Bruder" (familie + posesie). Perfekt cu haben (cel mai folosit auxiliar).'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = v.impersonal
        ? '<small style="color:#6b7280;">Verb IMPERSONAL — doar forma „es": <strong>es ' + v.perf[0][1] + '</strong>. NU se conjugă cu ich/du/wir...</small>'
        : '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 Verbe — referință</strong> · Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'L7 e o lecție de gramatică (der/die/das + posesive) — fără verbe noi. Conjugăm un verb din pool + un recap util.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Acesta e un INSTRUMENT DE CĂUTARE. La A1 înveți complet doar Präsens — Präteritum și Perfekt vin mai târziu (Lecțiile 11+ / 17). Nicio lecție nu rămâne fără verbe: aici ai spielen (verb nou model) + haben (recap, util la familie). 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong>' + (v.recap ? ' · 📎 recap' : '') + ' · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            (v.recap ? '<div class="theory-box" style="background:#d1fae5;"><p style="margin:0;">📎 <strong>Recap</strong> — verb deja conjugat complet la <strong>' + v.recap + '</strong>. Reluat aici ca referință (regula: nicio lecție fără verbe).</p></div>' : '') +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
