// DATA DEFINITIONS
const questionsData = [
  {
    id: 1,
    question: "Sau năm 1954, Đảng xác định nhiệm vụ chiến lược cơ bản của cách mạng miền Nam là gì?",
    options: [
      "Tiếp tục cách mạng dân tộc dân chủ nhân dân.",
      "Tiến hành cách mạng xã hội chủ nghĩa.",
      "Khôi phục kinh tế và ổn định đời sống.",
      "Thực hiện tổng tuyển cử hòa bình."
    ],
    correct: 0, // A: "Tiếp tục cách mạng dân tộc dân chủ nhân dân."
    explanation: "Nghị quyết của Đảng xác định CM XHCN ở miền Bắc giữ vai trò quyết định nhất, còn CM DTDCNN ở miền Nam giữ vai trò quyết định trực tiếp đối với sự nghiệp giải phóng miền Nam."
  },
  {
    id: 2,
    question: "Con đường cơ bản của cách mạng miền Nam được xác định tại Nghị quyết Trung ương 15 (1/1959) là gì?",
    options: [
      "Khởi nghĩa giành chính quyền bằng bạo lực.",
      "Vận động ngoại giao để thi hành hiệp định.",
      "Tổng tiến công quân sự trên toàn miền.",
      "Đấu tranh chính trị hòa bình là chủ yếu."
    ],
    correct: 0, // A: "Khởi nghĩa giành chính quyền bằng bạo lực."
    explanation: "Nghị quyết Trung ương 15 (tháng 1/1959) đã vạch rõ con đường phát triển cơ bản của cách mạng miền Nam là sử dụng bạo lực cách mạng, khởi nghĩa giành chính quyền về tay nhân dân."
  },
  {
    id: 3,
    question: "Điểm chuyển biến quan trọng nhất về phương pháp cách mạng tại Nghị quyết 15 là gì?",
    options: [
      "Kết hợp chính trị với vũ trang.",
      "Chuyển sang đấu tranh kinh tế.",
      "Ưu tiên đàm phán quốc tế.",
      "Chỉ tập trung vào đấu tranh vũ trang."
    ],
    correct: 0, // A: "Kết hợp chính trị với vũ trang."
    explanation: "Điểm chuyển biến quan trọng nhất là chuyển từ hình thức đấu tranh chính trị đơn thuần sang kết hợp đấu tranh chính trị với đấu tranh vũ trang."
  },
  {
    id: 4,
    question: "Sự kiện nào đánh dấu bước nhảy vọt của cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công?",
    options: [
      "Trận thắng Ấp Bắc.",
      "Phong trào Đồng khởi.",
      "Thành lập Mặt trận Dân tộc Giải phóng.",
      "Chiến thắng Bình Giã."
    ],
    correct: 1, // B: "Phong trào Đồng khởi."
    explanation: "Phong trào Đồng khởi (1959 - 1960) đã đánh phá từng mảng chính quyền địch ở nông thôn, giáng đòn nặng nề vào chính sách tân thực dân, đưa cách mạng miền Nam chuyển từ thế giữ gìn lực lượng sang thế tiến công."
  },
  {
    id: 5,
    question: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam (20/12/1960) ra đời nhằm mục đích gì?",
    options: [
      "Xây dựng nền kinh tế thị trường.",
      "Thay thế hoàn toàn vai trò của Đảng.",
      "Tập hợp lực lượng toàn dân chống Mỹ-Diệm.",
      "Ký kết các hiệp định quốc tế."
    ],
    correct: 2, // C: "Tập hợp lực lượng toàn dân chống Mỹ-Diệm."
    explanation: "Mặt trận ra đời ngày 20/12/1960 nhằm đoàn kết, tập hợp rộng rãi tất cả các tầng lớp nhân dân, các đoàn thể, tôn giáo, nhân sĩ trí thức... cùng nhau đánh đuổi đế quốc Mỹ và tay sai Diệm."
  },
  {
    id: 6,
    question: "Đại hội III (9/1960) xác định vai trò của cách mạng miền Nam đối với sự nghiệp giải phóng dân tộc như thế nào?",
    options: [
      "Giữ vai trò hỗ trợ.",
      "Vai trò trung gian hòa giải.",
      "Quyết định trực tiếp.",
      "Quyết định nhất."
    ],
    correct: 2, // C: "Quyết định trực tiếp."
    explanation: "Đại hội III (9/1960) xác định: Cách mạng XHCN ở miền Bắc giữ vai trò 'quyết định nhất', còn cách mạng DTDCNN ở miền Nam giữ vai trò 'quyết định trực tiếp' đối với sự nghiệp giải phóng miền Nam."
  },
  {
    id: 7,
    question: "Hình thức đấu tranh chủ đạo chống lại chiến lược 'Chiến tranh đặc biệt' (1961-1965) là gì?",
    options: [
      "Tập trung đánh phá các đô thị.",
      "Chỉ đấu tranh ngoại giao tại Genève.",
      "Vận động binh sĩ Mỹ đào ngũ.",
      "Kết hợp hai chân, ba mũi giáp công."
    ],
    correct: 3, // D: "Kết hợp hai chân, ba mũi giáp công."
    explanation: "Quân dân ta đã áp dụng phương châm kết hợp 'hai chân' (chính trị và quân sự) và 'ba mũi giáp công' (quân sự, chính trị, binh vận) trên cả 3 vùng chiến lược."
  },
  {
    id: 8,
    question: "Thắng lợi của trận Ấp Bắc (2/1/1963) có ý nghĩa quan trọng nhất là gì?",
    options: [
      "Buộc Mỹ phải rút quân về nước.",
      "Kết thúc chiến lược 'Chiến tranh cục bộ'.",
      "Xóa sổ hoàn toàn chính quyền Sài Gòn.",
      "Đánh bại các chiến thuật quân sự mới của Mỹ."
    ],
    correct: 3, // D: "Đánh bại các chiến thuật quân sự mới của Mỹ."
    explanation: "Trận thắng Ấp Bắc (2/1/1963) khẳng định quân dân miền Nam hoàn toàn có khả năng đánh bại các chiến thuật quân sự tân tiến mới của Mỹ như 'trực thăng vận' và 'thiết xa vận'."
  },
  {
    id: 9,
    question: "Mỹ coi 'Ấp chiến lược' là 'xương sống' của 'Chiến tranh đặc biệt' nhằm mục đích chính là gì?",
    options: [
      "Thực hiện tự do bầu cử ở nông thôn.",
      "Dồn dân, tách dân khỏi cách mạng.",
      "Xây dựng các căn cứ quân sự khép kín.",
      "Cải thiện đời sống nông dân miền Nam."
    ],
    correct: 1, // B: "Dồn dân, tách dân khỏi cách mạng."
    explanation: "Ấp chiến lược được Mỹ - Diệm coi là xương sống nhằm mục đích dồn dân, gom dân vào trại tập trung, tách nhân dân ra khỏi lực lượng cách mạng ('tách cá khỏi nước')."
  }
];

// 12 UNIFORM MYSTERY GIFT BOXES DATA
const luckyData = [
  { id: 1, text: "Chúc bạn may mắn lần sau (hên lắm mới xu được vậy)", gifts: 0, meme: "assets/meme_sad.jpg", sticker: "😭 XU CÀ NA RỒI!" },
  { id: 2, text: "Bạn được nhận 1 phần quà đến từ nhóm 4 dễ thương", gifts: 1, meme: "assets/meme_congrats.jpg", sticker: "🎁 NHÓM 4 BAN THƯỞNG!" },
  { id: 3, text: "Chúc mừng bạn! Người kế bên của bạn nhận được phần quà của bạn", gifts: 1, meme: "assets/meme_sad.jpg", sticker: "🤝 KÉ LỘC CHO BẠN BÊN CẠNH!" },
  { id: 4, text: "Chọn một người bất kỳ để tặng cho người đó", gifts: 1, meme: "assets/meme_congrats.jpg", sticker: "💘 BÙA YÊU! TẶNG BẠN BẤT KỲ" },
  { id: 5, text: "Bạn là người may mắn nhất hôm nay, x3 quà nhé", gifts: 3, meme: "assets/meme_congrats.jpg", sticker: "👑 NỔ HŨ X3 QUÀ TRUYỆN THUYẾT!" },
  { id: 6, text: "WOA WOA giỏi vậy ta, 1 phần quà nhen", gifts: 1, meme: "assets/meme_congrats.jpg", sticker: "🔥 WOA WOA ĐỈNH CỦA CHÓP!" },
  { id: 7, text: "Trai xinh gái đẹp nào trả lời đúng vậy ta, cho x2 quà nhé", gifts: 2, meme: "assets/meme_congrats.jpg", sticker: "✨ TRAI XINH GÁI ĐẸP X2 QUÀ!" },
  { id: 8, text: "Tuyệt vời rồi, 1 phần quà sẽ được trao đến bạn nho", gifts: 1, meme: "assets/meme_congrats.jpg", sticker: "👍 TUYỆT VỜI Ô MẶT TRỜI!" },
  { id: 9, text: "Ỏ đỉnh vậy chời, cho 1 phần quà nha", gifts: 1, meme: "assets/meme_congrats.jpg", sticker: "🥺 Ỏ ĐỈNH VẬY CHỜI!" },
  { id: 10, text: "Tốt, có tập trung bài thuyết trình, x2 lên cho trẫm", gifts: 2, meme: "assets/meme_congrats.jpg", sticker: "👑 TRẪM KHIẾN BAN X2 QUÀ!" },
  { id: 11, text: "Nhóm 4 có VIP không ạ :3, trả lời đúng thì có thưởng", gifts: 1, meme: "assets/meme_congrats.jpg", sticker: "💎 NHÓM 4 VIP PRO MAX!" },
  { id: 12, text: "Em đã thành công thu hút sự chú ý của tôi, thưởng", gifts: 1, meme: "assets/meme_congrats.jpg", sticker: "💘 THẢ THÍNH THÀNH CÔNG!" }
];

// APP STATE
let questionsState = [];
let luckyState = [];
let pendingLuckyUnlocked = false;
let activeQuestionId = null;
let currentLuckyGifts = 0;
let totalGiftsAwarded = 0;
let isSoundEnabled = true;
let currentSlide = 1;
const totalSlides = 3;

// WEB AUDIO SYNTHESIZER
class AudioSynth {
  constructor() {
    this.ctx = null;
  }
  
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playTone(freq, type, duration, delay = 0) {
    if (!isSoundEnabled) return;
    this.init();
    setTimeout(() => {
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }, delay);
  }

  flip() {
    this.playTone(350, 'sine', 0.08);
    this.playTone(500, 'sine', 0.12, 40);
  }

  correct() {
    this.playTone(523.25, 'triangle', 0.15, 0);   // C5
    this.playTone(659.25, 'triangle', 0.15, 80);  // E5
    this.playTone(783.99, 'triangle', 0.3, 160);  // G5
    this.playTone(1046.50, 'triangle', 0.4, 280); // C6
  }

  wrong() {
    this.playTone(200, 'sawtooth', 0.2, 0);
    this.playTone(160, 'sawtooth', 0.3, 120);
  }

  luckyFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((n, idx) => {
      this.playTone(n, 'sine', 0.25, idx * 70);
    });
  }
}

const audio = new AudioSynth();

// CONFETTI ENGINE
class ConfettiEngine {
  constructor() {
    this.canvas = document.getElementById('confettiCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x, y, count = 70) {
    const colors = ['#9B2C2C', '#D97706', '#FCD34D', '#742A2A', '#10B981', '#FFFFFF'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 3;
      this.particles.push({
        x: x || window.innerWidth / 2,
        y: y || window.innerHeight / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        opacity: 1,
        gravity: 0.2
      });
    }
    if (!this.animId) this.loop();
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.015;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();

      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.loop());
    } else {
      this.animId = null;
    }
  }
}

const confetti = new ConfettiEngine();

// BACKGROUND AMBIENT PARTICLES
class AmbientBg {
  constructor() {
    this.canvas = document.getElementById('bgCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.resize();
    this.init();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.nodes = [];
    const count = Math.floor((window.innerWidth * window.innerHeight) / 45000);
    for (let i = 0; i < count; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        r: Math.random() * 1.8 + 1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.25 + 0.05
      });
    }
    this.loop();
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0) n.x = this.canvas.width;
      if (n.x > this.canvas.width) n.x = 0;
      if (n.y < 0) n.y = this.canvas.height;
      if (n.y > this.canvas.height) n.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(155, 44, 44, ${n.alpha})`;
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.loop());
  }
}

new AmbientBg();

// INITIALIZE GAME STATE
function initializeGame() {
  questionsState = questionsData.map(q => ({
    ...q,
    status: 'unanswered'
  }));

  luckyState = luckyData.map(l => ({
    ...l,
    isOpened: false
  }));

  pendingLuckyUnlocked = false;
  activeQuestionId = null;
  totalGiftsAwarded = 0;
  document.getElementById('giftCounter').innerText = 0;

  renderQuestionsGrid();
  renderLuckyGrid();
  renderProgressDots();
  updateStats();

  showQuestionSelectionView();
}

// RENDER PROGRESS DOTS (9 DOTS)
function renderProgressDots() {
  const container = document.getElementById('progressDots');
  if (!container) return;
  container.innerHTML = '';

  const answeredCount = questionsState.filter(q => q.status === 'answered_correct').length;
  document.getElementById('progressCurrentQ').innerText = answeredCount;

  questionsState.forEach(q => {
    const dot = document.createElement('div');
    dot.className = `dot ${q.status === 'answered_correct' ? 'active' : ''}`;
    dot.title = `Câu ${q.id}: ${q.status === 'answered_correct' ? 'Đã hoàn thành' : 'Chưa hoàn thành'}`;
    container.appendChild(dot);
  });
}

// RENDER SCREEN 1: 9 QUESTIONS GRID
function renderQuestionsGrid() {
  const grid = document.getElementById('questionsGrid');
  grid.innerHTML = '';

  questionsState.forEach(q => {
    const cardEl = document.createElement('div');
    cardEl.className = `q-card-item ${q.status}`;
    cardEl.setAttribute('data-id', q.id);

    let iconHtml = '?';
    let actionText = 'Chọn câu';

    if (q.status === 'answered_correct') {
      iconHtml = '<i class="fa-solid fa-check"></i>';
      actionText = '✓ ĐÃ HOÀN THÀNH';
    }

    const numStr = q.id < 10 ? `0${q.id}` : `${q.id}`;

    cardEl.innerHTML = `
      <div class="q-card-icon">${iconHtml}</div>
      <div class="q-card-title">CÂU ${numStr}</div>
      <div class="q-card-action">${actionText}</div>
    `;

    cardEl.addEventListener('click', () => handleQuestionCardClick(q.id));
    grid.appendChild(cardEl);
  });
}

function handleQuestionCardClick(id) {
  const q = questionsState.find(item => item.id === id);
  if (!q) return;

  if (q.status === 'answered_correct') {
    showToast(`Câu ${id} này đã trả lời ĐÚNG và hoàn thành! Hãy chọn câu khác.`);
    return;
  }

  activeQuestionId = id;
  openQuestionModal(q);
}

// QUESTION MODAL LOGIC (ENLARGED HIGH LEGIBILITY)
function openQuestionModal(qData) {
  document.getElementById('modalQNum').innerText = qData.id;
  document.getElementById('modalQText').innerText = qData.question;
  
  const optionsGrid = document.getElementById('modalOptionsGrid');
  optionsGrid.innerHTML = '';

  const labels = ['A', 'B', 'C', 'D'];
  qData.options.forEach((optText, idx) => {
    const optEl = document.createElement('div');
    optEl.className = 'option-item-lg';
    optEl.innerHTML = `
      <span class="option-key-lg">${labels[idx]}</span>
      <span class="option-text">${optText}</span>
    `;
    optEl.addEventListener('click', () => selectAnswer(idx));
    optionsGrid.appendChild(optEl);
  });

  document.getElementById('explanationBox').classList.add('hidden');
  document.getElementById('modalQStatus').innerText = '';

  const footerActions = document.getElementById('modalQActions');
  footerActions.innerHTML = `<button class="btn outline-btn" onclick="closeModal('questionModal')">Đóng</button>`;

  const modalCard = document.getElementById('modalQuestionCard');
  if (modalCard) modalCard.classList.remove('shake');

  openModal('questionModal');
}

function selectAnswer(selectedIdx) {
  const q = questionsState.find(item => item.id === activeQuestionId);
  if (!q) return;

  const optionsGrid = document.getElementById('modalOptionsGrid');
  const items = optionsGrid.children;
  const labels = ['A', 'B', 'C', 'D'];

  Array.from(items).forEach(item => item.classList.add('disabled'));

  const isCorrect = selectedIdx === q.correct;
  const footerActions = document.getElementById('modalQActions');
  const modalCard = document.getElementById('modalQuestionCard');

  if (isCorrect) {
    // CORRECT ANSWER LOGIC: REVEAL CORRECT ANSWER & EXPLANATION ONLY NOW!
    items[selectedIdx].classList.add('correct');
    document.getElementById('modalQStatus').innerHTML = '<span style="color: #10B981;"><i class="fa-solid fa-circle-check"></i> 🎉 CHÍNH XÁC! Bạn đã trả lời đúng!</span>';
    audio.correct();
    confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 70);

    document.getElementById('explTitle').innerHTML = `<i class="fa-solid fa-check-circle"></i> ✅ ĐÁP ÁN ĐÚNG: ${labels[q.correct]}. ${q.options[q.correct]}`;
    document.getElementById('explanationText').innerHTML = `<strong>💡 GIẢI THÍCH:</strong> ${q.explanation}`;
    document.getElementById('explanationBox').classList.remove('hidden');

    q.status = 'answered_correct';

    footerActions.innerHTML = `
      <button class="btn primary-btn large-btn" onclick="proceedToLuckyWithTransition()">
        <i class="fa-solid fa-gift"></i> 🎁 CHỌN HỘP QUÀ
      </button>
    `;
  } else {
    // WRONG ANSWER LOGIC: ABSOLUTELY DO NOT REVEAL CORRECT ANSWER OR EXPLANATION!
    if (modalCard) {
      modalCard.classList.remove('shake');
      void modalCard.offsetWidth;
      modalCard.classList.add('shake');
    }

    items[selectedIdx].classList.add('wrong');
    
    document.getElementById('modalQStatus').innerHTML = '<span style="color: #9B2C2C;"><i class="fa-solid fa-circle-xmark"></i> ❌ RẤT TIẾC!</span>';
    audio.wrong();

    optionsGrid.innerHTML = `
      <div class="wrong-notice-box">
        <i class="fa-solid fa-face-grimace" style="font-size: 2rem; margin-bottom: 0.4rem; display: block; color: #9B2C2C;"></i>
        "Đáp án chưa chính xác, hãy để người khác thử sức nhé!"
      </div>
    `;
    document.getElementById('explanationBox').classList.add('hidden');

    footerActions.innerHTML = `
      <button class="btn secondary-btn" onclick="closeModal('questionModal')">
        <i class="fa-solid fa-arrow-left"></i> ← QUAY LẠI CÂU HỎI
      </button>
    `;
  }

  renderQuestionsGrid();
  renderProgressDots();
  updateStats();
}

// TRANSITION SCREEN WHEN ANSWERING CORRECTLY (1 - 1.2 SECONDS)
function proceedToLuckyWithTransition() {
  closeModal('questionModal');
  pendingLuckyUnlocked = true;

  // Show transition overlay
  openModal('correctTransitionOverlay');
  audio.correct();

  setTimeout(() => {
    closeModal('correctTransitionOverlay');
    document.getElementById('questionSelectionView').classList.remove('active');
    document.getElementById('luckyNumberView').classList.add('active');

    document.getElementById('gameInfoBanner').innerText = 'Chọn 1 Hộp Quà May Mắn chưa mở bên dưới để nhận phần thưởng!';
    showToast('Đã mở khóa Hộp Quà May Mắn! Hãy chọn 1 hộp quà 🎁');
  }, 1200);
}

function showQuestionSelectionView() {
  document.getElementById('luckyNumberView').classList.remove('active');
  document.getElementById('questionSelectionView').classList.add('active');
  document.getElementById('gameInfoBanner').innerText = 'Chọn 1 câu hỏi ➜ Trả lời ĐÚNG ➜ Mới được mở Hộp Quà May Mắn!';
}

// RENDER SCREEN 2: 12 UNIFORM MYSTERY GIFT BOXES GRID
function renderLuckyGrid() {
  const grid = document.getElementById('luckyGrid');
  grid.innerHTML = '';

  luckyState.forEach(l => {
    const cardEl = document.createElement('div');
    const isLocked = l.isOpened;
    cardEl.className = `gift-box-card ${isLocked ? 'locked' : ''}`;
    cardEl.setAttribute('data-id', l.id);

    const iconHtml = isLocked ? '<i class="fa-solid fa-lock"></i>' : '<i class="fa-solid fa-gift"></i>';
    const labelStr = isLocked ? 'ĐÃ MỞ' : 'MỞ QUÀ';

    cardEl.innerHTML = `
      <div class="gift-box-icon">${iconHtml}</div>
      <div class="gift-box-label">${labelStr}</div>
    `;

    cardEl.addEventListener('click', (e) => handleLuckyCardClick(l.id, cardEl, e));
    grid.appendChild(cardEl);
  });
}

// CLICK OPEN GIFT ANIMATION (600 - 800MS)
function handleLuckyCardClick(id, cardEl, event) {
  if (!pendingLuckyUnlocked) {
    showToast('🔒 Bạn cần trả lời ĐÚNG một câu hỏi trước khi chọn Hộp Quà!');
    return;
  }

  const luckyItem = luckyState.find(item => item.id === id);
  if (!luckyItem) return;

  if (luckyItem.isOpened) {
    showToast(`Hộp quà này đã được mở! Hãy chọn hộp quà khác.`);
    return;
  }

  // Prevent multiple clicks during animation
  const grid = document.getElementById('luckyGrid');
  grid.style.pointerEvents = 'none';

  // Add opening animation class
  cardEl.classList.add('opening');
  audio.flip();

  // Burst mini confetti around card position
  const rect = cardEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  confetti.burst(centerX, centerY, 50);

  setTimeout(() => {
    cardEl.classList.remove('opening');
    grid.style.pointerEvents = 'auto';

    // Lock this mystery gift box
    luckyItem.isOpened = true;
    pendingLuckyUnlocked = false;

    audio.luckyFanfare();
    confetti.burst(window.innerWidth / 2, window.innerHeight / 3, 90);

    renderLuckyGrid();
    updateStats();
    openLuckyModal(luckyItem);
  }, 750);
}

// PREMIUM GAME SHOW REWARD MODAL & MASCOT STAGE ANIMATIONS
function openLuckyModal(lData) {
  currentLuckyGifts = lData.gifts;
  document.getElementById('modalLuckyText').innerText = `"${lData.text}"`;
  
  const memeImg = document.getElementById('modalLuckyMemeImg');
  const stickerTag = document.getElementById('modalLuckySticker');
  
  if (memeImg) memeImg.src = lData.meme || 'assets/meme_congrats.jpg';
  if (stickerTag) stickerTag.innerText = lData.sticker || '🔥 ĐỈNH CỦA CHÓP!';

  const imageBox = document.getElementById('mascotImageBox');
  const shadow = document.getElementById('mascotGroundShadow');

  // Trigger 3D Run-In + Jump Animation
  if (imageBox && shadow) {
    imageBox.classList.remove('anim-run-in', 'anim-idle');
    shadow.classList.remove('anim-run-in', 'anim-idle');

    void imageBox.offsetWidth; // Reflow
    void shadow.offsetWidth;

    imageBox.classList.add('anim-run-in');
    shadow.classList.add('anim-run-in');

    // Switch to gentle idle after 1.1s
    setTimeout(() => {
      imageBox.classList.remove('anim-run-in');
      shadow.classList.remove('anim-run-in');
      imageBox.classList.add('anim-idle');
      shadow.classList.add('anim-idle');
    }, 1100);
  }

  openModal('luckyModal');
}

function claimLuckyReward() {
  if (currentLuckyGifts > 0) {
    addGifts(currentLuckyGifts);
    showToast(`Đã cộng thêm ${currentLuckyGifts} quà! 🎁`);
  }
  closeModal('luckyModal');
  showQuestionSelectionView(); // Navigates back to Screen 1 without resetting game state
}

function addGifts(count) {
  totalGiftsAwarded += count;
  document.getElementById('giftCounter').innerText = totalGiftsAwarded;
}

function updateStats() {
  const answeredQ = questionsState.filter(q => q.status === 'answered_correct').length;
  const openedLucky = luckyState.filter(l => l.isOpened).length;

  document.getElementById('answeredQCount').innerText = answeredQ;
  document.getElementById('openedLuckyCount').innerText = openedLucky;
  renderProgressDots();
}

// MODAL CONTROLS
function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

// TOAST SYSTEM
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2800);
}

// TAB NAVIGATION SYSTEM
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.view-section');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    btn.classList.add('active');
    document.getElementById(`${target}Section`).classList.add('active');
  });
});

function switchToGameTab() {
  tabBtns[0].click();
}

// SLIDE PRESENTATION NAVIGATION
const slideCards = document.querySelectorAll('.slide-card');
document.getElementById('prevSlide').addEventListener('click', () => {
  if (currentSlide > 1) {
    currentSlide--;
    updateSlideView();
  }
});

document.getElementById('nextSlide').addEventListener('click', () => {
  if (currentSlide < totalSlides) {
    currentSlide++;
    updateSlideView();
  }
});

function updateSlideView() {
  slideCards.forEach(s => s.classList.remove('active'));
  const activeSlide = document.querySelector(`.slide-card[data-slide="${currentSlide}"]`);
  if (activeSlide) activeSlide.classList.add('active');
  document.getElementById('currentSlideNum').innerText = currentSlide;
}

// HEADER BUTTON ACTIONS
document.getElementById('soundToggle').addEventListener('click', () => {
  isSoundEnabled = !isSoundEnabled;
  const icon = document.querySelector('#soundToggle i');
  icon.className = isSoundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
  showToast(isSoundEnabled ? 'Đã bật âm thanh 🔊' : 'Đã tắt âm thanh 🔇');
});

document.getElementById('fullscreenToggle').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
});

// EXPLICIT RESET GAME BUTTON ONLY
document.getElementById('btnResetGame').addEventListener('click', () => {
  initializeGame();
  showToast('Đã làm mới lại toàn bộ Quiz & Hộp Quà May Mắn! 🔄');
});

// INITIAL SETUP ON LOAD
window.addEventListener('DOMContentLoaded', () => {
  initializeGame();
});
