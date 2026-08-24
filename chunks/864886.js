let n = r(692714),
    { MAX_LENGTH: i, MAX_SAFE_INTEGER: o } = r(376780),
    { safeRe: a, t: s } = r(64672),
    l = r(131077),
    { compareIdentifiers: u } = r(931717);
class c {
    constructor(e, t) {
        if (((t = l(t)), e instanceof c))
            if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
            else e = e.version;
        else if ("string" != typeof e) throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
        if (e.length > i) throw TypeError(`version is longer than ${i} characters`);
        n("SemVer", e, t),
            (this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease);
        const r = e.trim().match(t.loose ? a[s.LOOSE] : a[s.FULL]);
        if (!r) throw TypeError(`Invalid Version: ${e}`);
        if (
            ((this.raw = e),
            (this.major = +r[1]),
            (this.minor = +r[2]),
            (this.patch = +r[3]),
            this.major > o || this.major < 0)
        )
            throw TypeError("Invalid major version");
        if (this.minor > o || this.minor < 0) throw TypeError("Invalid minor version");
        if (this.patch > o || this.patch < 0) throw TypeError("Invalid patch version");
        r[4]
            ? (this.prerelease = r[4].split(".").map((e) => {
                  if (/^[0-9]+$/.test(e)) {
                      let t = +e;
                      if (t >= 0 && t < o) return t;
                  }
                  return e;
              }))
            : (this.prerelease = []),
            (this.build = r[5] ? r[5].split(".") : []),
            this.format();
    }
    format() {
        return (
            (this.version = `${this.major}.${this.minor}.${this.patch}`),
            this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
            this.version
        );
    }
    toString() {
        return this.version;
    }
    compare(e) {
        if ((n("SemVer.compare", this.version, this.options, e), !(e instanceof c))) {
            if ("string" == typeof e && e === this.version) return 0;
            e = new c(e, this.options);
        }
        return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
        return (
            e instanceof c || (e = new c(e, this.options)),
            u(this.major, e.major) || u(this.minor, e.minor) || u(this.patch, e.patch)
        );
    }
    comparePre(e) {
        if ((e instanceof c || (e = new c(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let t = 0;
        do {
            let r = this.prerelease[t],
                i = e.prerelease[t];
            if ((n("prerelease compare", t, r, i), void 0 === r && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === r) return -1;
            else if (r === i) continue;
            else return u(r, i);
        } while (++t);
    }
    compareBuild(e) {
        e instanceof c || (e = new c(e, this.options));
        let t = 0;
        do {
            let r = this.build[t],
                i = e.build[t];
            if ((n("build compare", t, r, i), void 0 === r && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === r) return -1;
            else if (r === i) continue;
            else return u(r, i);
        } while (++t);
    }
    inc(e, t, r) {
        switch (e) {
            case "premajor":
                (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc("pre", t, r);
                break;
            case "preminor":
                (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", t, r);
                break;
            case "prepatch":
                (this.prerelease.length = 0), this.inc("patch", t, r), this.inc("pre", t, r);
                break;
            case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t, r), this.inc("pre", t, r);
                break;
            case "major":
                (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++,
                    (this.minor = 0),
                    (this.patch = 0),
                    (this.prerelease = []);
                break;
            case "minor":
                (0 !== this.patch || 0 === this.prerelease.length) && this.minor++,
                    (this.patch = 0),
                    (this.prerelease = []);
                break;
            case "patch":
                0 === this.prerelease.length && this.patch++, (this.prerelease = []);
                break;
            case "pre": {
                let e = +!!Number(r);
                if (!t && !1 === r) throw Error("invalid increment argument: identifier is empty");
                if (0 === this.prerelease.length) this.prerelease = [e];
                else {
                    let n = this.prerelease.length;
                    for (; --n >= 0; ) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, (n = -2));
                    if (-1 === n) {
                        if (t === this.prerelease.join(".") && !1 === r)
                            throw Error("invalid increment argument: identifier already exists");
                        this.prerelease.push(e);
                    }
                }
                if (t) {
                    let n = [t, e];
                    !1 === r && (n = [t]),
                        0 === u(this.prerelease[0], t)
                            ? isNaN(this.prerelease[1]) && (this.prerelease = n)
                            : (this.prerelease = n);
                }
                break;
            }
            default:
                throw Error(`invalid increment argument: ${e}`);
        }
        return (this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
}
e.exports = c;
