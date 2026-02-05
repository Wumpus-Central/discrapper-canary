"use strict";
n.d(t, { J: () => T });
var r = n(87955),
    i = n(735438),
    a = n.n(i),
    s = n(621466),
    o = n(77729),
    l = n(626584),
    u = n(773669),
    c = n(403362),
    d = n(626457),
    _ = n(565314);
let f = 250,
    p = new l.A("Spellchecker"),
    h = o.A?.spellCheck;
function m(e) {
    e = _.A[e] ?? e;
    let t = (0, r.parse)(e.replace(/[_-]/g, "-"));
    if (null == t || null == t.langtag.language || null == t.langtag.region)
        return void p.error(`${e} is not a valid locale.`);
    let { language: n, region: i } = t.langtag;
    return `${n.language.toLowerCase()}-${i.toUpperCase()}`;
}
class g {
    languageDetector;
    regionPreference;
    _enabled = !0;
    misspelledWord = "";
    corrections = [];
    constructor(e) {
        const [t, n] = u.default.locale.split("-");
        this.regionPreference = n;
        const r = this.getAvailableLanguages(e);
        (this.languageDetector = new d.A(t, (n) => {
            let i = `${n}-${this.regionPreference}`;
            if (-1 !== e.indexOf(i)) this.setLocale(i);
            else {
                let e = r[n] ?? _.A[t];
                null != e && this.setLocale(e);
            }
        })),
            h.on("spellcheck-result", (e, t) => {
                (this.misspelledWord = e ?? ""), (this.corrections = t ?? []);
            });
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e;
    }
    setLearnedWords(e) {
        h.setLearnedWords(e);
    }
    setLocale(e) {
        h.setLocale(e)?.then((t) => {
            p.info(`Switching to ${e}`, t ? "(available)" : "(unavailable)");
        });
    }
    setAppLocale(e) {
        this.regionPreference = e.split("-")[1];
    }
    detectLanguage(e) {
        this.enabled && this.languageDetector.process(e);
    }
    getAvailableLanguages(e) {
        let t = {};
        return (
            e.forEach((e) => {
                let [n] = e.split("-");
                t[n] = t[n] ?? e;
            }),
            t
        );
    }
    isMisspelled(e, t) {
        return "" !== this.misspelledWord && e === this.misspelledWord;
    }
    getCorrectionsForMisspelling(e, t) {
        return this.isMisspelled(e, t) ? this.corrections : [];
    }
    replaceMisspelling(e) {
        h.replaceMisspelling(e);
    }
}
let E = a().debounce((e, t) => {
    let n = I(t);
    null != n && e.detectLanguage(n);
}, f);
function A(e) {
    null != document.body && document.body.addEventListener("beforeinput", (t) => E(e, t.target), !0);
}
function I(e) {
    return null == e
        ? null
        : (0, s.vq)(e, HTMLInputElement) || (0, s.vq)(e, HTMLTextAreaElement)
          ? e.value
          : (0, s.vq)(e) && e.hasAttribute("contenteditable")
            ? e.textContent
            : void 0;
}
async function T() {
    let e = new g(((await h.getAvailableDictionaries()) ?? []).map(m).filter(c.Vq));
    return A(e), e;
}
