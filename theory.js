// ============================================
// TEORIE - Lecția 7: Andreeas Familie
// Claudia Toth · A1.1 — Annettes Deutschkurs · Lecția 7 din 10
// Sursă DF: 40 (Familie), 14 (Berufe), 15 (Artikel im Singular), 16 (Übung), WS25, WS34
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const theoryHTML = `
    <!-- 0: Intro + notice diacritice + povestea -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Astăzi: Andreea ne arată o poză cu familia ei din România</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>O poză de acasă</h4>
                <p>E pauză la cursul Annettei. Andreea scoate telefonul și îi arată Annettei o poză cu <strong>familia ei din România</strong>. Annette o întreabă cine e fiecare — și așa începe lecția de azi.</p>
                <p>Învățăm <strong>cuvintele pentru familie</strong> (tată, mamă, frate, bunici...), <strong>cele 3 articole</strong> ale germanei (der / die / das — marea provocare pentru români!), cum spui <strong>ce meserie</strong> are cineva, și cum spui <strong>familia MEA / a TA</strong> (mein / dein).</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette (Lehrerin)</div>
                        <div class="dialog-text">Oh, ein schönes Foto! Wer ist das, Andreea?
                            <span class="translation">O, o poză frumoasă! Cine e acela/aceea, Andreea?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Das ist meine Familie. Das ist mein Vater. Er heißt Ion.
                            <span class="translation">Aceasta e familia mea. Acesta e tatăl meu. El se numește Ion.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Und was ist dein Vater von Beruf?
                            <span class="translation">Și ce meserie are tatăl tău? (lit.: ce e tatăl tău de meserie?)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Mein Vater ist Ingenieur. Und meine Mutter ist Lehrerin — wie du!
                            <span class="translation">Tatăl meu e inginer. Iar mama mea e profesoară — ca tine!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Ce vei putea face la finalul lecției</h4>
                <ul style="margin-left: 18px;">
                    <li>Să numești toți <strong>membrii familiei</strong> în germană (der Vater, die Mutter, die Großeltern...)</li>
                    <li>Să folosești corect <strong>der / die / das</strong> (articolul hotărât — genul substantivului)</li>
                    <li>Să faci diferența între <strong>ein / eine / ein</strong> (nehotărât) și <strong>kein / keine / kein</strong> (negație)</li>
                    <li>Să spui <strong>ce meserie</strong> are cineva (fără articol!) + regula <strong>-er → -in</strong> la feminin</li>
                    <li>Să spui <strong>mein / dein</strong> (familia MEA / a TA) — și să descoperi marea sinteză a Akkusativului</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Die Familie -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>👨‍👩‍👧‍👦 2. Die Familie — familia Andreei</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-familie.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>📷 Familia Andreei (în România)</h4>
                <p>Andreea are o familie mare. Hai să o cunoaștem — fiecare cuvânt vine <strong>cu articolul lui</strong> (foarte important, vezi subsecțiunea următoare):</p>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Traducere RO</th><th>În familia Andreei</th></tr>
                    <tr><td><strong>der Vater</strong></td><td>tatăl</td><td><em style="color:#6b7280;">Ion — Ingenieur</em></td></tr>
                    <tr><td><strong>die Mutter</strong></td><td>mama</td><td><em style="color:#6b7280;">Maria — Lehrerin</em></td></tr>
                    <tr><td><strong>die Eltern</strong></td><td>părinții</td><td><em style="color:#6b7280;">Ion und Maria</em></td></tr>
                    <tr><td><strong>der Bruder</strong></td><td>fratele</td><td><em style="color:#6b7280;">Andrei — Student</em></td></tr>
                    <tr><td><strong>die Schwester</strong></td><td>sora</td><td><em style="color:#6b7280;">Elena — Ärztin</em></td></tr>
                    <tr><td><strong>die Geschwister</strong></td><td>frații (și surorile)</td><td><em style="color:#6b7280;">Andrei und Elena</em></td></tr>
                    <tr><td><strong>der Großvater (der Opa)</strong></td><td>bunicul</td><td><em style="color:#6b7280;">Gheorghe</em></td></tr>
                    <tr><td><strong>die Großmutter (die Oma)</strong></td><td>bunica</td><td><em style="color:#6b7280;">Veronica</em></td></tr>
                    <tr><td><strong>die Großeltern</strong></td><td>bunicii</td><td><em style="color:#6b7280;">Gheorghe und Veronica</em></td></tr>
                    <tr><td><strong>der Onkel</strong></td><td>unchiul</td><td><em style="color:#6b7280;">Vasile</em></td></tr>
                    <tr><td><strong>die Tante</strong></td><td>mătușa</td><td><em style="color:#6b7280;">Ana</em></td></tr>
                    <tr><td><strong>das Kind</strong></td><td>copilul</td><td><em style="color:#6b7280;">Andreea ist das Kind von Ion und Maria</em></td></tr>
                    <tr><td><strong>der Sohn</strong></td><td>fiul</td><td><em style="color:#6b7280;">Andrei ist der Sohn</em></td></tr>
                    <tr><td><strong>die Tochter</strong></td><td>fiica</td><td><em style="color:#6b7280;">Andreea ist die Tochter</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>💡 Observație de aur — familia te ajută cu articolele!</h4>
                <p>Te-ai uitat bine la tabel? Familia germană vine în <strong>perechi de gen</strong>:</p>
                <ul style="margin-left: 18px;">
                    <li>Bărbații → aproape mereu <strong style="color:#1d4ed8;">der</strong>: <em>der Vater, der Bruder, der Onkel, der Sohn, der Opa</em></li>
                    <li>Femeile → aproape mereu <strong style="color:#be185d;">die</strong>: <em>die Mutter, die Schwester, die Tante, die Tochter, die Oma</em></li>
                    <li>⚠️ Excepția-surpriză: <strong style="color:#047857;">das Kind</strong> (copilul) — <strong>neutru</strong>! În română „copilul" e masculin, în germană e <em>das</em>.</li>
                </ul>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai (Koch, din Rusia)</div>
                        <div class="dialog-text">Ich habe eine Schwester. Sie heißt Olga und wohnt in Russland.
                            <span class="translation">Am o soră. Se numește Olga și locuiește în Rusia.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Schön! Ich habe einen Bruder und eine Schwester. Wir sind drei Kinder.
                            <span class="translation">Frumos! Eu am un frate și o soră. Suntem trei copii.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Noi, românii, avem un truc: <strong>der = el (bărbat), die = ea (femeie)</strong> merge la majoritatea membrilor familiei. Dar NU te baza pe sens la restul cuvintelor — <em>das Kind</em> e copilul, dar e neutru! De-aia învățăm fiecare substantiv CU articolul lui. 🦋"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Der, die, das (bestimmter Artikel) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📌 3. Der, die, das — cele 3 genuri (articolul hotărât)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-der-die-das.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>📚 Germana are 3 genuri la singular</h4>
                <p>În română ai 2 articole (un / o → masculin / feminin). În germană ai <strong>3</strong>, pentru că există și genul <strong>neutru</strong>:</p>
                <table class="grammar-table">
                    <tr><th>Articol</th><th>Gen</th><th>Exemplu DE</th><th>Traducere RO</th></tr>
                    <tr><td><strong style="color:#1d4ed8;">der</strong></td><td>masculin</td><td>der Vater, der Tisch</td><td><em style="color:#6b7280;">tatăl, masa</em></td></tr>
                    <tr><td><strong style="color:#be185d;">die</strong></td><td>feminin</td><td>die Mutter, die Lampe</td><td><em style="color:#6b7280;">mama, lampa</em></td></tr>
                    <tr><td><strong style="color:#047857;">das</strong></td><td>neutru</td><td>das Kind, das Buch</td><td><em style="color:#6b7280;">copilul, cartea</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-left: 4px solid #dc2626;">
                <h4>🚨 REGULA DE AUR — învață substantivul CU articolul</h4>
                <p>Nu există o logică 100% sigură pentru gen (nu e ca în română). De aceea:</p>
                <p style="text-align: center; font-size: 1.1rem; margin: 14px 0; padding: 10px; background: #fff; border-radius: 6px;">
                    Nu înveți <s>Tisch</s> &nbsp;→&nbsp; înveți <strong style="color:#1d4ed8;">der Tisch</strong>
                </p>
                <p>Articolul face parte din cuvânt, ca o etichetă lipită. Așa eviți greșeli toată viața. Familia (subsecțiunea 2) e cel mai ușor început: <em>der</em> pentru bărbați, <em>die</em> pentru femei.</p>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🔎 Când folosești articolul hotărât (der/die/das)?</h4>
                <p>Când vorbești despre ceva <strong>cunoscut</strong> sau <strong>deja menționat</strong>:</p>
                <ul style="margin-left: 18px;">
                    <li><strong>Der Mann</strong> heißt Ion. <em style="color:#6b7280;">— Bărbatul (cel cunoscut) se numește Ion.</em></li>
                    <li><strong>Die Frau</strong> ist Lehrerin. <em style="color:#6b7280;">— Femeia (cea cunoscută) e profesoară.</em></li>
                    <li><strong>Das Kind</strong> spielt. <em style="color:#6b7280;">— Copilul (cel cunoscut) se joacă.</em></li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/annette.png" alt="Annette" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Annette îți spune (ca profesoară):</div>
                    <div class="text">„Cel mai bun sfat al meu pentru 20 de ani de germană: scrie substantivele noi mereu cu articol ȘI cu o culoare. <strong>der</strong> = albastru, <strong>die</strong> = roșu, <strong>das</strong> = verde. Creierul ține minte culoarea. Funcționează — promit. 💚"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: ein/eine/ein + kein/keine/kein -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🔵 4. Ein / eine / ein și negația kein / keine / kein</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-ein-kein.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>📊 Articolul nehotărât: ein / eine / ein</h4>
                <p>Folosit când ceva e <strong>necunoscut</strong> sau menționat <strong>prima dată</strong> (ca „un / o" din română):</p>
                <table class="grammar-table">
                    <tr><th>Gen</th><th>Hotărât</th><th>Nehotărât</th><th>Exemplu + Traducere RO</th></tr>
                    <tr><td>masculin</td><td><strong style="color:#1d4ed8;">der</strong></td><td><strong>ein</strong></td><td>ein Vater <em style="color:#6b7280;">— un tată</em></td></tr>
                    <tr><td>feminin</td><td><strong style="color:#be185d;">die</strong></td><td><strong>eine</strong></td><td>eine Mutter <em style="color:#6b7280;">— o mamă</em></td></tr>
                    <tr><td>neutru</td><td><strong style="color:#047857;">das</strong></td><td><strong>ein</strong></td><td>ein Kind <em style="color:#6b7280;">— un copil</em></td></tr>
                </table>
                <p style="margin-top: 10px;"><strong>Logica:</strong> prima dată folosești <em>ein/eine</em> (necunoscut), apoi treci la <em>der/die/das</em> (acum e cunoscut):</p>
                <p style="padding: 8px 12px; background:#fff; border-radius:6px;"><strong>Ein</strong> Mann spielt Fußball. <strong>Der</strong> Mann heißt Ion.<br><em style="color:#6b7280;">Un bărbat joacă fotbal. Bărbatul (acela) se numește Ion.</em></p>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>❌ Negația: kein / keine / kein</h4>
                <p>Îți amintești de la <strong>Lecția 5</strong> (Akkusativ)? <em>kein</em> neagă substantivele cu articol nehotărât. Acum îl vedem sistematizat pe toate genurile:</p>
                <table class="grammar-table">
                    <tr><th>Gen</th><th>Nehotărât</th><th>Negație</th><th>Exemplu + Traducere RO</th></tr>
                    <tr><td>masculin</td><td>ein</td><td><strong>kein</strong></td><td>Das ist kein Vater. <em style="color:#6b7280;">— Nu e (niciun) tată.</em></td></tr>
                    <tr><td>feminin</td><td>eine</td><td><strong>keine</strong></td><td>Das ist keine Mutter. <em style="color:#6b7280;">— Nu e (nicio) mamă.</em></td></tr>
                    <tr><td>neutru</td><td>ein</td><td><strong>kein</strong></td><td>Das ist kein Kind. <em style="color:#6b7280;">— Nu e (niciun) copil.</em></td></tr>
                </table>
                <p style="margin-top: 8px; color:#6b7280;"><em>💡 kein urmează EXACT formele lui ein, plus „k" în față: ein → kein, eine → keine.</em></p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian (Arzt)</div>
                        <div class="dialog-text">Ist das ein Buch?
                            <span class="translation">Aceasta e o carte?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/carolina.png" alt="Carolina" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Carolina (Fotografin)</div>
                        <div class="dialog-text">Nein, das ist kein Buch. Das ist ein Heft!
                            <span class="translation">Nu, nu e o carte. E un caiet!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Die Berufe -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💼 5. Die Berufe — Was bist du von Beruf?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-berufe.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>💬 Întrebarea cheie: Was bist du von Beruf?</h4>
                <p>= <em>Ce meserie ai?</em> (literal: ce ești tu de meserie?). Răspuns: <strong>Ich bin + meseria</strong>.</p>
                <p style="padding: 8px 12px; background:#fff; border-radius:6px;">— Was bist du von Beruf? <em style="color:#6b7280;">(Ce meserie ai?)</em><br>— Ich bin Studentin. Und du? <em style="color:#6b7280;">(Sunt studentă. Tu?)</em><br>— Ich bin Koch. <em style="color:#6b7280;">(Sunt bucătar.)</em></p>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-left: 4px solid #dc2626;">
                <h4>🚨 Capcană (recap Lecția 2): profesia se spune FĂRĂ articol!</h4>
                <ul style="margin-left: 18px;">
                    <li>✅ Ich bin <strong>Lehrerin</strong>. <em style="color:#6b7280;">— Sunt profesoară.</em></li>
                    <li>❌ <s>Ich bin eine Lehrerin.</s> <em style="color:#6b7280;">(greșit — fără „eine"!)</em></li>
                </ul>
                <p>După <strong>profesie + naționalitate</strong>, germana NU pune articol.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>📊 Regula de aur: masculin + -in = feminin</h4>
                <p>Aproape orice meserie face femininul adăugând <strong>-in</strong>. Uneori apare și un Umlaut (a → ä, o → ö):</p>
                <table class="grammar-table">
                    <tr><th>Masculin (der)</th><th>Feminin (die)</th><th>Traducere RO</th></tr>
                    <tr><td>der Lehrer</td><td>die Lehrer<strong>in</strong></td><td><em style="color:#6b7280;">profesor / profesoară</em></td></tr>
                    <tr><td>der Student</td><td>die Student<strong>in</strong></td><td><em style="color:#6b7280;">student / studentă</em></td></tr>
                    <tr><td>der Ingenieur</td><td>die Ingenieur<strong>in</strong></td><td><em style="color:#6b7280;">inginer / ingineră</em></td></tr>
                    <tr><td>der Mechaniker</td><td>die Mechaniker<strong>in</strong></td><td><em style="color:#6b7280;">mecanic / mecanică</em></td></tr>
                    <tr><td>der Koch</td><td>die K<strong>ö</strong>ch<strong>in</strong></td><td><em style="color:#6b7280;">bucătar / bucătăreasă (o → ö!)</em></td></tr>
                    <tr><td>der Arzt</td><td>die <strong>Ä</strong>rzt<strong>in</strong></td><td><em style="color:#6b7280;">medic (a → ä!)</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>👥 Meseriile celor din clasa Annettei</h4>
                <table class="grammar-table">
                    <tr><th>Persoană</th><th>Beruf (DE)</th><th>Traducere RO</th></tr>
                    <tr><td>Annette</td><td>Lehrerin</td><td><em style="color:#6b7280;">profesoară</em></td></tr>
                    <tr><td>Mihai</td><td>Koch</td><td><em style="color:#6b7280;">bucătar</em></td></tr>
                    <tr><td>Andreea</td><td>Studentin</td><td><em style="color:#6b7280;">studentă</em></td></tr>
                    <tr><td>Florian</td><td>Arzt</td><td><em style="color:#6b7280;">medic</em></td></tr>
                    <tr><td>Carolina</td><td>Fotografin</td><td><em style="color:#6b7280;">fotografă</em></td></tr>
                    <tr><td>Acar</td><td>Vorarbeiter</td><td><em style="color:#6b7280;">șef de echipă (pe șantier)</em></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: mein/dein + sinteza + sumar -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>👉 6. mein / dein + marea sinteză a Akkusativului + sumar</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-mein-dein-sumar.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🤝 mein (al meu) și dein (al tău)</h4>
                <p>Vestea bună: <strong>mein</strong> și <strong>dein</strong> urmează EXACT formele lui <em>ein</em> — același tipar pe care tocmai l-ai învățat!</p>
                <table class="grammar-table">
                    <tr><th>Gen</th><th>ein</th><th>mein (al meu)</th><th>dein (al tău)</th><th>Exemplu + Traducere RO</th></tr>
                    <tr><td>masculin</td><td>ein</td><td><strong>mein</strong></td><td><strong>dein</strong></td><td>mein Vater <em style="color:#6b7280;">— tatăl meu</em></td></tr>
                    <tr><td>feminin</td><td>eine</td><td><strong>meine</strong></td><td><strong>deine</strong></td><td>meine Mutter <em style="color:#6b7280;">— mama mea</em></td></tr>
                    <tr><td>neutru</td><td>ein</td><td><strong>mein</strong></td><td><strong>dein</strong></td><td>mein Kind <em style="color:#6b7280;">— copilul meu</em></td></tr>
                </table>
                <p style="margin-top: 10px;">Întrebare ↔ răspuns tipic:</p>
                <p style="padding: 8px 12px; background:#fff; border-radius:6px;">— Wie heißt <strong>dein</strong> Vater? <em style="color:#6b7280;">(Cum se numește tatăl tău?)</em><br>— <strong>Mein</strong> Vater heißt Ion. <em style="color:#6b7280;">(Tatăl meu se numește Ion.)</em><br>— Was ist <strong>deine</strong> Mutter von Beruf? <em style="color:#6b7280;">(Ce meserie are mama ta?)</em><br>— <strong>Meine</strong> Mutter ist Lehrerin. <em style="color:#6b7280;">(Mama mea e profesoară.)</em></p>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-left: 4px solid #dc2626;">
                <h4>🚨 MAREA SINTEZĂ — capcana de aur a Akkusativului</h4>
                <p>Îți amintești de <strong>Lecția 5</strong>? La Akkusativ, DOAR masculinul se schimbă, primind <strong>-en</strong>. Ei bine, regula e <strong>aceeași</strong> pentru TOATE cuvintele de tip „ein":</p>
                <table class="grammar-table">
                    <tr><th>Nominativ (m)</th><th>Akkusativ (m)</th><th>Exemplu + Traducere RO</th></tr>
                    <tr><td>der</td><td><strong>den</strong></td><td>Ich sehe den Mann. <em style="color:#6b7280;">— Îl văd pe bărbat.</em></td></tr>
                    <tr><td>ein</td><td><strong>einen</strong></td><td>Ich habe einen Bruder. <em style="color:#6b7280;">— Am un frate.</em></td></tr>
                    <tr><td>kein</td><td><strong>keinen</strong></td><td>Ich habe keinen Bruder. <em style="color:#6b7280;">— Nu am (niciun) frate.</em></td></tr>
                    <tr><td>mein</td><td><strong>meinen</strong></td><td>Ich suche meinen Bruder. <em style="color:#6b7280;">— Îmi caut fratele.</em></td></tr>
                </table>
                <p style="margin-top: 10px; text-align:center; font-weight:bold; color:#991b1b;">der → den · ein → einen · kein → keinen · mein → meinen<br>= TOATE doar la masculin, TOATE primesc -en</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Asta e momentul în care germana începe să aibă LOGICĂ. O singură regulă (masculin → -en la Akkusativ) merge la 4 cuvinte deodată. Nu mai memorezi 4 lucruri, ci 1. Astea-s momentele mele preferate la germană. 💚 Notă: formele complete (sein, ihr, unser...) vin la Lecția 9 — azi doar mein/dein."</div>
                </div>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Cele 5 reguli de aur ale lecției</h4>
                <ol style="margin-left: 18px;">
                    <li><strong>Familia</strong>: der pentru bărbați (der Vater), die pentru femei (die Mutter), dar <strong>das Kind</strong> = neutru!</li>
                    <li><strong>3 articole hotărâte</strong>: der (m), die (f), das (n). Învață mereu substantivul CU articolul.</li>
                    <li><strong>ein/eine/ein</strong> (necunoscut, prima dată) → <strong>der/die/das</strong> (cunoscut). <strong>kein</strong> = negația lui ein.</li>
                    <li><strong>Profesia fără articol</strong>: „Ich bin Lehrerin." Masculin + <strong>-in</strong> = feminin (der Koch → die Köchin).</li>
                    <li><strong>mein/dein = ca ein</strong>. Și marea sinteză: la Akkusativ masculin <strong>der→den, ein→einen, kein→keinen, mein→meinen</strong>.</li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">Acum poți vorbi despre familia ta și meserii în germană. 👨‍👩‍👧‍👦🎉</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
