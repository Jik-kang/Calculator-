// สลับ Tab การทำงาน
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

            if (tabName === 'base') {
                    document.getElementById('base-tab').classList.add('active');
                            event.target.classList.add('active');
                                } else {
                                        document.getElementById('matrix-tab').classList.add('active');
                                                event.target.classList.add('active');
                                                    }
                                                    }

                                                    // -------------------------------------------------------------
                                                    // LOGIC 1: BASE CONVERTER (พร้อมขั้นตอนวิธีทำ)
                                                    // -------------------------------------------------------------
                                                    function convertBase() {
                                                        const rawInput = document.getElementById('base-input').value.trim();
                                                            const fromBase = parseInt(document.getElementById('from-base').value);

                                                                // 1. แปลงค่าอินพุตเป็นฐาน 10 (Decimal) ก่อนเป็นตัวกลาง
                                                                    const decVal = parseInt(rawInput, fromBase);

                                                                        if (isNaN(decVal)) {
                                                                                alert("กรุณากรอกตัวเลขให้ถูกต้องตามฐานที่เลือก!");
                                                                                        return;
                                                                                            }

                                                                                                // 2. แปลงจากฐาน 10 ไปยังฐานอื่นๆ
                                                                                                    const binStr = decVal.toString(2);
                                                                                                        const octStr = decVal.toString(8);
                                                                                                            const hexStr = decVal.toString(16).toUpperCase();

                                                                                                                // 3. แสดงผลลัพธ์
                                                                                                                    document.getElementById('res-bin').innerText = binStr;
                                                                                                                        document.getElementById('res-oct').innerText = octStr;
                                                                                                                            document.getElementById('res-dec').innerText = decVal;
                                                                                                                                document.getElementById('res-hex').innerText = hexStr;

                                                                                                                                    // 4. สร้างขั้นตอนแสดงวิธีทำ (Step-by-step display)
                                                                                                                                        let stepsHTML = `<p>1. แปลง <code>${rawInput}</code> (ฐาน ${fromBase}) เป็น <strong>ฐาน 10</strong> ได้เท่ากับ <strong>${decVal}</strong></p>`;
                                                                                                                                            stepsHTML += `<p>2. การแปลงจากฐาน 10 (${decVal}) ไปฐาน 2:</p><ul>`;
                                                                                                                                                
                                                                                                                                                    let tempDec = decVal;
                                                                                                                                                        if (tempDec === 0) stepsHTML += `<li>0 ÷ 2 = 0 เศษ 0</li>`;
                                                                                                                                                            while (tempDec > 0) {
                                                                                                                                                                    let remainder = tempDec % 2;
                                                                                                                                                                            let quotient = Math.floor(tempDec / 2);
                                                                                                                                                                                    stepsHTML += `<li>${tempDec} ÷ 2 = ${quotient} (เศษ <strong>${remainder}</strong>)</li>`;
                                                                                                                                                                                            tempDec = quotient;
                                                                                                                                                                                                }
                                                                                                                                                                                                    stepsHTML += `</ul><p>อ่านเศษจากล่างขึ้นบน จะได้ <strong>${binStr}</strong></p>`;

                                                                                                                                                                                                        document.getElementById('base-steps').innerHTML = stepsHTML;
                                                                                                                                                                                                            document.getElementById('base-results').style.display = 'block';
                                                                                                                                                                                                            }

                                                                                                                                                                                                            // -------------------------------------------------------------
                                                                                                                                                                                                            // LOGIC 2: MATRIX DETERMINANT (2x2)
                                                                                                                                                                                                            // -------------------------------------------------------------
                                                                                                                                                                                                            function calcMatrix() {
                                                                                                                                                                                                                const a = parseFloat(document.getElementById('m00').value) || 0;
                                                                                                                                                                                                                    const b = parseFloat(document.getElementById('m01').value) || 0;
                                                                                                                                                                                                                        const c = parseFloat(document.getElementById('m10').value) || 0;
                                                                                                                                                                                                                            const d = parseFloat(document.getElementById('m11').value) || 0;

                                                                                                                                                                                                                                // สูตร det(A) = ad - bc
                                                                                                                                                                                                                                    const det = (a * d) - (b * c);

                                                                                                                                                                                                                                        document.getElementById('res-det').innerText = det;
                                                                                                                                                                                                                                            document.getElementById('matrix-steps').innerHTML = 
                                                                                                                                                                                                                                                    `สูตร: det(A) = (a × d) - (b × c)<br>` +
                                                                                                                                                                                                                                                            `แทนค่า: (${a} × ${d}) - (${b} × ${c})<br>` +
                                                                                                                                                                                                                                                                    `= ${a * d} - ${b * c} = <strong>${det}</strong>`;

                                                                                                                                                                                                                                                                        document.getElementById('matrix-results').style.display = 'block';
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                        