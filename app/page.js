"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Clipboard,
  Clock3,
  Compass,
  Hammer,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Pause,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const heroSlides = [
  {
    kicker: "YIHUI DECORATION · NUJIANG",
    title: ["用专业，", "筑就理想空间"],
    copy: "从一张图纸到一盏灯亮，我们把每一道工序做实，把每一次托付放在心上。",
    label: "空间营造",
  },
  {
    kicker: "DESIGN WITH RESPONSIBILITY",
    title: ["让设计，", "回应真实生活"],
    copy: "尊重空间、理解需求、关注细节，让设计价值在日常使用中持续发生。",
    label: "设计表达",
  },
  {
    kicker: "BUILD FOR A BETTER FUTURE",
    title: ["以担当，", "共建美好未来"],
    copy: "立足怒江，以务实的行动、进取的精神和负责任的服务回报每一份信任。",
    label: "企业担当",
  },
];

const culture = [
  {
    icon: Hammer,
    index: "01",
    title: "勤劳务实",
    en: "DILIGENCE",
    desc: "尊重每一份托付，把标准落到每一道工序，把承诺落实在每一个现场。",
  },
  {
    icon: Lightbulb,
    index: "02",
    title: "创新进取",
    en: "INNOVATION",
    desc: "持续学习新的材料、工艺与设计方法，为空间寻找更合适、更长久的答案。",
  },
  {
    icon: ShieldCheck,
    index: "03",
    title: "勇于担当",
    en: "RESPONSIBILITY",
    desc: "直面问题、主动协同、及时响应，对项目结果负责，也对客户信任负责。",
  },
  {
    icon: HeartHandshake,
    index: "04",
    title: "回报社会",
    en: "CONTRIBUTION",
    desc: "立足怒江、服务本地，用专业创造价值，用行动参与更美好的社区生活。",
  },
];

const history = [
  {
    year: "2016",
    title: "公司成立",
    tag: "初心启程",
    desc: "2016年12月28日，怒江毅辉建筑装饰有限责任公司正式成立，扎根怒江，开启企业发展历程。",
    metric: "2016.12.28",
  },
  {
    year: "2018",
    title: "事业启航",
    tag: "建筑装饰",
    desc: "2018年，公司正式开始建筑装饰事业，以务实行动积累经验，持续提升建筑装饰与装修服务能力。",
    metric: "建筑装饰事业正式起步",
  },
  {
    year: "2024",
    title: "公司升级",
    tag: "发展升级",
    desc: "2024年，公司完成升级，进一步强化企业管理、工程服务与专业能力，以更完整的服务回应客户需求。",
    metric: "能力与服务同步升级",
  },
  {
    year: "2026",
    title: "志向笃定",
    tag: "为人民服务",
    desc: "2026年，公司志向在建筑行业为人民服务，以责任担当做好每一项工程，用专业行动回报社会。",
    metric: "以建筑服务人民",
  },
];

const notices = [
  {
    type: "事务通知",
    date: "2026.07.10",
    title: "夏季施工现场安全与材料存放提示",
    copy: "高温及雨季期间，请各项目组加强临电、材料防潮与现场通风检查，按节点完成安全记录。",
  },
  {
    type: "公示公告",
    date: "2026.07.01",
    title: "公司官方网站内容公示说明",
    copy: "官方网站进入内容完善阶段，企业资料、项目案例与联系信息将以审核后的正式版本为准。",
  },
  {
    type: "内部事务",
    date: "2026.06.20",
    title: "标准化施工流程专题培训安排",
    copy: "围绕进场交底、隐蔽工程、节点验收和成品保护开展专题学习，持续提升项目协作效率。",
  },
];

const contacts = [
  { icon: Phone, label: "联系电话", value: "0886-362447", action: "tel:" },
  { icon: Mail, label: "企业邮箱", value: "待完善", action: "mailto:" },
  {
    icon: MapPin,
    label: "办公地址",
    value: "云南省怒江傈僳族自治州泸水市六库街道小沙坝536号",
  },
  { icon: Clock3, label: "服务时间", value: "每天 09:00—18:00" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeYear, setActiveYear] = useState(history[0].year);
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState("");
  const [noticeFilter, setNoticeFilter] = useState("全部");

  useEffect(() => {
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % heroSlides.length),
      7000,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveYear(visible.target.dataset.year);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.15 },
    );
    history.forEach(({ year }) => {
      const node = document.getElementById(`history-${year}`);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  const filteredNotices = useMemo(
    () =>
      noticeFilter === "全部"
        ? notices
        : notices.filter((notice) => notice.type === noticeFilter),
    [noticeFilter],
  );

  const jumpToYear = (year) => {
    document.getElementById(`history-${year}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setActiveYear(year);
  };

  const copyContact = async (label, value) => {
    if (value.includes("待完善")) return;
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1800);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="怒江毅辉建筑装饰首页">
          <span className="brand-mark brand-logo" aria-hidden="true">
            <img src="./yihui-company-logo.png" alt="" />
          </span>
          <span className="brand-text">
            <strong>怒江毅辉建筑装饰</strong>
            <small>YIHUI DECORATION</small>
          </span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["首页", "#top"],
            ["企业文化", "#culture"],
            ["发展历程", "#history"],
            ["通知事务", "#notices"],
            ["宣传视频", "#video"],
            ["联系我们", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          咨询我们 <ArrowRight size={16} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className={`hero hero-${slide + 1}`} id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-number" aria-hidden="true">
          0{slide + 1}
        </div>
        <div className="hero-content">
          <p className="eyebrow light">{heroSlides[slide].kicker}</p>
          <h1 key={`title-${slide}`}>
            {heroSlides[slide].title[0]}
            <span>{heroSlides[slide].title[1]}</span>
          </h1>
          <p className="hero-copy">{heroSlides[slide].copy}</p>
          <div className="hero-actions">
            <a className="button primary" href="#culture">
              走进毅辉 <ArrowRight size={18} />
            </a>
            <a className="button ghost" href="#video">
              <Play size={17} fill="currentColor" /> 品牌影像
            </a>
          </div>
        </div>
        <div className="hero-scene" aria-label="现代室内空间设计插画">
          <div className="scene-wall" />
          <div className="scene-arch" />
          <div className="scene-window"><span /></div>
          <div className="scene-table" />
          <div className="scene-vase"><i /><i /><i /></div>
          <div className="scene-light" />
          <div className="scene-caption">
            <span>空间 / 设计 / 营造</span>
            <strong>{heroSlides[slide].label}</strong>
          </div>
        </div>
        <div className="hero-controls">
          <div className="slide-dots">
            {heroSlides.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className={slide === index ? "active" : ""}
                aria-label={`切换至${item.label}`}
                onClick={() => setSlide(index)}
              >
                <span>0{index + 1}</span>
              </button>
            ))}
          </div>
          <a href="#intro" className="scroll-hint">
            向下探索 <ArrowDown size={16} />
          </a>
        </div>
      </section>

      <aside className="news-flash" aria-label="最新通知">
        <div className="flash-label"><span /> 最新通知</div>
        <a href="#notices">公司官方网站进入内容完善阶段，正式信息将持续更新</a>
        <time>2026.07.01</time>
        <a className="flash-more" href="#notices" aria-label="查看全部通知">
          <ArrowRight size={18} />
        </a>
      </aside>

      <section className="intro section" id="intro">
        <div className="intro-heading reveal">
          <p className="eyebrow">ABOUT YIHUI</p>
          <h2>把空间做好，<br /><em>把信任做长。</em></h2>
        </div>
        <div className="intro-copy reveal">
          <Quote className="quote-icon" size={34} />
          <p>
            怒江毅辉建筑装饰有限责任公司，成立于2016年，位于云南省怒江傈僳族自治州，是一家以从事建筑装饰、装修和其他建筑业为主的企业。
          </p>
          <a href="#culture" className="text-link">了解企业文化 <ArrowRight size={17} /></a>
        </div>
        <div className="intro-stats reveal">
          <div><strong>01</strong><span>从需求出发</span></div>
          <div><strong>02</strong><span>以专业落地</span></div>
          <div><strong>03</strong><span>用责任交付</span></div>
        </div>
      </section>

      <section className="culture-section section" id="culture">
        <div className="section-title-row">
          <div>
            <p className="eyebrow light">CORPORATE CULTURE</p>
            <h2>企业文化</h2>
          </div>
          <p className="section-lead">共同相信的价值，决定我们如何对待工作、伙伴、客户与社会。</p>
        </div>
        <div className="culture-quote">
          <span>我们的理念</span>
          <p>“勤劳务实，创新进取，勇于担当，回报社会”</p>
        </div>
        <div className="culture-grid">
          {culture.map(({ icon: Icon, index, title, en, desc }) => (
            <article className="culture-card" key={title}>
              <div className="culture-card-top">
                <span>{index}</span>
                <Icon size={27} strokeWidth={1.5} />
              </div>
              <p className="culture-en">{en}</p>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="culture-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="history-section section" id="history">
        <div className="history-header">
          <div>
            <p className="eyebrow">OUR JOURNEY</p>
            <h2>发展历程</h2>
          </div>
          <div className="history-intro">
            <p>时间见证选择，也记录每一次向前。点击年份，可直接跳转至对应发展节点。</p>
          </div>
        </div>
        <div className="year-nav" role="navigation" aria-label="发展历程年份导航">
          <div className="year-line" />
          {history.map(({ year }) => (
            <button
              type="button"
              key={year}
              className={activeYear === year ? "active" : ""}
              onClick={() => jumpToYear(year)}
            >
              <i />
              <span>{year}</span>
            </button>
          ))}
        </div>
        <div className="history-list">
          {history.map((item, index) => (
            <article
              className="history-node"
              id={`history-${item.year}`}
              data-year={item.year}
              key={item.year}
            >
              <div className="history-year">{item.year}<small>YIHUI</small></div>
              <div className="history-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="history-content">
                <span className="history-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <strong>{item.metric}</strong>
              </div>
              <div className={`history-visual visual-${index + 1}`} aria-hidden="true">
                <span>{item.year.slice(2)}</span>
                <Compass size={36} strokeWidth={1.2} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="notice-section section" id="notices">
        <div className="section-title-row dark-text">
          <div>
            <p className="eyebrow">NOTICE & AFFAIRS</p>
            <h2>通知事务</h2>
          </div>
          <div className="notice-tabs" role="tablist" aria-label="通知分类">
            {["全部", "事务通知", "公示公告", "内部事务"].map((tab) => (
              <button
                type="button"
                role="tab"
                aria-selected={noticeFilter === tab}
                className={noticeFilter === tab ? "active" : ""}
                onClick={() => setNoticeFilter(tab)}
                key={tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="notice-meta">
          <span className="sample-badge">示例内容</span>
          <p>正式发布前，请替换为公司审核后的真实通知。</p>
        </div>
        <div className="notice-list">
          {filteredNotices.map((notice, index) => (
            <article className="notice-item" key={notice.title}>
              <div className="notice-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="notice-date"><time>{notice.date}</time><span>{notice.type}</span></div>
              <div className="notice-body"><h3>{notice.title}</h3><p>{notice.copy}</p></div>
              <button type="button" aria-label={`查看${notice.title}`}><ChevronRight size={22} /></button>
            </article>
          ))}
        </div>
      </section>

      <section className="video-section" id="video">
        <div className="video-copy">
          <p className="eyebrow light">YIHUI IN MOTION</p>
          <h2>影像毅辉</h2>
          <p>让镜头带你走进设计思考、施工现场与空间落成的每一个重要瞬间。</p>
          <div className="video-facts">
            <span><Award size={18} /> 品牌宣传片</span>
            <span><BriefcaseBusiness size={18} /> 项目纪实</span>
            <span><Sparkles size={18} /> 空间故事</span>
          </div>
        </div>
        <div className={playing ? "video-player playing" : "video-player"}>
          <video
            controls={playing}
            preload="metadata"
            poster="./video-poster.svg"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src="./videos/yihui-brand-film.mp4" type="video/mp4" />
            您的浏览器暂不支持视频播放。
          </video>
          {!playing && (
            <button
              type="button"
              className="play-button"
              aria-label="播放毅辉品牌宣传片"
              onClick={(event) => {
                const video = event.currentTarget.parentElement.querySelector("video");
                video.play();
              }}
            >
              <Play size={28} fill="currentColor" />
              <span>播放宣传片</span>
            </button>
          )}
          <div className="video-label"><span>BRAND FILM</span><strong>让美好空间，真实发生</strong></div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="contact-heading">
          <p className="eyebrow">CONTACT US</p>
          <h2>联系我们</h2>
          <p>每一个理想空间，都始于一次认真交流。欢迎与我们分享你的需求与想法。</p>
          <span className="sample-badge">欢迎来电咨询</span>
        </div>
        <div className="contact-grid">
          {contacts.map(({ icon: Icon, label, value, action }) => (
            <article className="contact-card" key={label}>
              <Icon size={25} strokeWidth={1.6} />
              <div><span>{label}</span><strong>{value}</strong></div>
              {action && !value.includes("待完善") ? (
                <a href={`${action}${value}`} aria-label={`${label}${value}`}><ArrowRight size={19} /></a>
              ) : (
                <button type="button" onClick={() => copyContact(label, value)} aria-label={`复制${label}`}>
                  {copied === label ? <Check size={18} /> : <Clipboard size={18} />}
                </button>
              )}
            </article>
          ))}
        </div>
        <div className="contact-band">
          <div><span>项目咨询</span><strong>告诉我们，你想打造怎样的空间</strong></div>
          <a href="mailto:">开启沟通 <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark brand-logo" aria-hidden="true">
              <img src="./yihui-company-logo.png" alt="" />
            </span>
            <span className="brand-text"><strong>怒江毅辉建筑装饰</strong><small>YIHUI DECORATION</small></span>
          </a>
          <p>勤劳务实 · 创新进取 · 勇于担当 · 回报社会</p>
          <div className="footer-links">
            <a href="#culture">企业文化</a>
            <a href="#history">发展历程</a>
            <a href="#notices">通知事务</a>
            <a href="#video">宣传视频</a>
            <a href="#contact">联系我们</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 怒江毅辉建筑装饰有限责任公司</span>
          <span>网站备案信息待完善</span>
        </div>
      </footer>
    </main>
  );
}
