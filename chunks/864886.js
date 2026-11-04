let n = r(692714),
    { MAX_LENGTH: i, MAX_SAFE_INTEGER: o } = r(376780),
    { safeRe: a, t: s } = r(64672),
    l = r(131077),
    { compareIdentifiers: u } = r(931717);
e.exports = class e {
    constructor(t, r) {
        if (((r = l(r)), t instanceof e))
            if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease) return t;
            else t = t.version;
        else if ("string" != typeof t) throw TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
        if (t.length > i) throw TypeError(`version is longer than ${i} characters`);
        (n("SemVer", t, r),
            (this.options = r),
            (this.loose = !!r.loose),
            (this.includePrerelease = !!r.includePrerelease));
        let u = t.trim().match(r.loose ? a[s.LOOSE] : a[s.FULL]);
        if (!u) throw TypeError(`Invalid Version: ${t}`);
        if (
            ((this.raw = t),
            (this.major = +u[1]),
            (this.minor = +u[2]),
            (this.patch = +u[3]),
            this.major > o || this.major < 0)
        )
            throw TypeError("Invalid major version");
        if (this.minor > o || this.minor < 0) throw TypeError("Invalid minor version");
        if (this.patch > o || this.patch < 0) throw TypeError("Invalid patch version");
        (u[4]
            ? (this.prerelease = u[4].split(".").map((e) => {
                  if (/^[0-9]+$/.test(e)) {
                      let t = +e;
                      if (t >= 0 && t < o) return t;
                  }
                  return e;
              }))
            : (this.prerelease = []),
            (this.build = u[5] ? u[5].split(".") : []),
            this.format());
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
    compare(t) {
        if ((n("SemVer.compare", this.version, this.options, t), !(t instanceof e))) {
            if ("string" == typeof t && t === this.version) return 0;
            t = new e(t, this.options);
        }
        return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
    }
    compareMain(t) {
        return (
            t instanceof e || (t = new e(t, this.options)),
            u(this.major, t.major) || u(this.minor, t.minor) || u(this.patch, t.patch)
        );
    }
    comparePre(t) {
        if ((t instanceof e || (t = new e(t, this.options)), this.prerelease.length && !t.prerelease.length)) return -1;
        if (!this.prerelease.length && t.prerelease.length) return 1;
        if (!this.prerelease.length && !t.prerelease.length) return 0;
        let r = 0;
        do {
            let e = this.prerelease[r],
                i = t.prerelease[r];
            if ((n("prerelease compare", r, e, i), void 0 === e && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === e) return -1;
            else if (e === i) continue;
            else return u(e, i);
        } while (++r);
    }
    compareBuild(t) {
        t instanceof e || (t = new e(t, this.options));
        let r = 0;
        do {
            let e = this.build[r],
                i = t.build[r];
            if ((n("build compare", r, e, i), void 0 === e && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === e) return -1;
            else if (e === i) continue;
            else return u(e, i);
        } while (++r);
    }
    inc(e, t, r) {
        switch (e) {
            case "premajor":
                ((this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc("pre", t, r));
                break;
            case "preminor":
                ((this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", t, r));
                break;
            case "prepatch":
                ((this.prerelease.length = 0), this.inc("patch", t, r), this.inc("pre", t, r));
                break;
            case "prerelease":
                (0 === this.prerelease.length && this.inc("patch", t, r), this.inc("pre", t, r));
                break;
            case "major":
                ((0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++,
                    (this.minor = 0),
                    (this.patch = 0),
                    (this.prerelease = []));
                break;
            case "minor":
                ((0 !== this.patch || 0 === this.prerelease.length) && this.minor++,
                    (this.patch = 0),
                    (this.prerelease = []));
                break;
            case "patch":
                (0 === this.prerelease.length && this.patch++, (this.prerelease = []));
                break;
            case "pre": {
                let e = +!!Number(r);
                if (!t && !1 === r) throw Error("invalid increment argument: identifier is empty");
                if (0 === this.prerelease.length) this.prerelease = [e];
                else {
                    let n = this.prerelease.length;
                    for (; --n >= 0;) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, (n = -2));
                    if (-1 === n) {
                        if (t === this.prerelease.join(".") && !1 === r)
                            throw Error("invalid increment argument: identifier already exists");
                        this.prerelease.push(e);
                    }
                }
                if (t) {
                    let n = [t, e];
                    (!1 === r && (n = [t]),
                        0 === u(this.prerelease[0], t)
                            ? isNaN(this.prerelease[1]) && (this.prerelease = n)
                            : (this.prerelease = n));
                }
                break;
            }
            default:
                throw Error(`invalid increment argument: ${e}`);
        }
        return ((this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join(".")}`), this);
    }
};
