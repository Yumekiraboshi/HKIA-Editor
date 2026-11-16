var Ot = Array.isArray, ka = Array.prototype.indexOf, xt = Array.prototype.includes, Vt = Array.from, sr = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, cr = Object.getOwnPropertyDescriptors, Sa = Object.prototype, Ta = Array.prototype, Tn = Object.getPrototypeOf, Vn = Object.isExtensible;
const Ca = () => {
};
function Ra(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function fr() {
  var e, t, n = new Promise((r, a) => {
    e = r, t = a;
  });
  return { promise: n, resolve: e, reject: t };
}
const V = 2, nt = 4, Gt = 8, ur = 1 << 24, de = 16, le = 32, Te = 64, ln = 128, Cn = 256, oe = 512, B = 1024, H = 2048, pe = 4096, q = 8192, Z = 16384, Ye = 32768, sn = 1 << 25, Ge = 65536, _t = 1 << 17, Na = 1 << 18, st = 1 << 19, Ia = 1 << 20, Ae = 1 << 25, Ke = 65536, Dt = 1 << 21, tt = 1 << 22, Pe = 1 << 23, Me =                 Symbol("$state"), dr =                 Symbol("component"), ja =                 Symbol(""), hr =                 Symbol("attributes"), cn =                 Symbol("class"), xa =                 Symbol("style"), fn =                 Symbol("text"), At = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Da = (
                                                                                                             
  !!globalThis.document?.contentType &&                 globalThis.document.contentType.includes("xml")
), Rn = 3, Lt = 8, Pa = 1, za = 2, Ua = 16, Ha = 2, pr = "[", Nn = "[!", Gn = "[?", In = "]", rt = {}, F =                 Symbol("uninitialized"), Fa = "http://www.w3.org/1999/xhtml";
function Ma() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ba(e) {
  console.warn("https://svelte.dev/e/hydratable_missing_but_expected");
}
function Kt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Va() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ga() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function Le(e) {
  j = e;
}
let D;
function se(e) {
  if (e === null)
    throw Kt(), rt;
  return D = e;
}
function kt() {
  return se(                Ne(D));
}
function ke(e) {
  if (j) {
    if (                Ne(D) !== null)
      throw Kt(), rt;
    D = e;
  }
}
function vr(e = 1) {
  if (j) {
    for (var t = e, n = D; t--; )
      n =                            
                      Ne(n);
    D = n;
  }
}
function Pt(e = !0) {
  for (var t = 0, n = D; ; ) {
    if (n.nodeType === Lt) {
      var r = (
                              
        n.data
      );
      if (r === In) {
        if (t === 0) return n;
        t -= 1;
      } else (r === pr || r === Nn ||                                  
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var a = (
                                 
                      Ne(n)
    );
    e && n.remove(), n = a;
  }
}
function mr(e) {
  if (!e || e.nodeType !== Lt)
    throw Kt(), rt;
  return (
                          
    e.data
  );
}
function gr(e) {
  return e === this.v;
}
function br(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _r(e) {
  return !br(e, this.v);
}
function yr(e) {
  throw new Error("https://svelte.dev/e/experimental_async_required");
}
function ct(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ka() {
  throw new Error("https://svelte.dev/e/missing_context");
}
function qa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ya(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Wa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Za() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ja(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Qa() {
  throw new Error("https://svelte.dev/e/fork_discarded");
}
function $a() {
  throw new Error("https://svelte.dev/e/fork_timing");
}
function ei() {
  throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction");
}
function ti() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function wr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_legacy_only");
}
function ni() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ri() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ai() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ii() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function oi(e, t, n) {
  const r = {};
  return [
    () => (n(r) || Ka(), e(r)),
    (a) => t(r, a),
    () => n(r)
  ];
}
function li(e) {
  let t = e.p;
  for (; t !== null && t.c === null; )
    t = t.p;
  return t?.c ?? null;
}
function qt(e, t) {
  return e === null && ct(), e.c ??= new Map(li(e) || void 0);
}
let P = null;
function at(e) {
  P = e;
}
function si() {
  return (
                                                              
    oi(Er, Or, Ar)
  );
}
function Er(e) {
  return (
                    
    qt(P).get(e)
  );
}
function Or(e, t) {
  return qt(P).set(e, t), t;
}
function Ar(e) {
  return qt(P).has(e);
}
function ci() {
  return qt(P);
}
function Yt(e, t = !1, n) {
  P = {
    p: P,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
                           
      R
    ),
    l: null
  };
}
function Wt(e) {
  var t = (
                                   
    P
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Yr(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, P = t.p, Lr(e);
}
function Lr(e = {}) {
  return sr(e, dr, { value: !0 }), e;
}
function kr() {
  return !0;
}
let Ue = [];
function Sr() {
  var e = Ue;
  Ue = [], Ra(e);
}
function He(e) {
  if (Ue.length === 0 && !mt) {
    var t = Ue;
    queueMicrotask(() => {
      t === Ue && Sr();
    });
  }
  Ue.push(e);
}
function fi() {
  for (; Ue.length > 0; )
    Sr();
}
const ui = -7169;
function z(e, t) {
  e.f = e.f & ui | t;
}
function jn(e) {
  (e.f & oe) !== 0 || e.deps === null ? z(e, B) : z(e, pe);
}
function Tr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & V) === 0 || (t.f & Ke) === 0 || (t.f ^= Ke, Tr(
                              
        t.deps
      ));
}
function Cr(e, t, n) {
  (e.f & H) !== 0 ? t.add(e) : (e.f & pe) !== 0 && n.add(e), Tr(e.deps), z(e, B);
}
function Zt(e) {
  var t = C, n = R;
  ce(null), Ee(null);
  try {
    return e();
  } finally {
    ce(t), Ee(n);
  }
}
function di(e, t, n, r) {
  const a = Jt;
  var i = e.filter((u) => !u.settled), o = t.map(a);
  if (n.length === 0 && i.length === 0) {
    r(o);
    return;
  }
  var s = (
                         
    R
  ), l = hi(), c = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((u) => u.promise)) : null;
  function d(u) {
    if ((s.f & Z) === 0) {
      l();
      try {
        r([...o, ...u]);
      } catch (f) {
        be(f, s);
      }
      zt();
    }
  }
  var p = Rr();
  if (n.length === 0) {
    c.then(() => d([])).finally(p);
    return;
  }
  function m() {
    Promise.all(n.map((u) =>                 pi(u))).then(d).catch((u) => be(u, s)).finally(p);
  }
  c ? c.then(() => {
    l(), m(), zt();
  }) : m();
}
function hi() {
  var e = (
                         
    R
  ), t = C, n = P, r = (
                        
    S
  );
  return function(i = !0) {
    Ee(e), ce(t), at(n), i && (e.f & Z) === 0 && (r?.activate(), r?.apply());
  };
}
function zt(e = !0) {
  Ee(null), ce(null), at(null), e && S?.deactivate();
}
function Rr() {
  var e = (
                         
    R
  ), t = e.b, n = (
                        
    S
  ), r = !!t?.is_rendered();
  return t?.update_pending_count(1, n), n.increment(r, e), () => {
    t?.update_pending_count(-1, n), n.decrement(r, e);
  };
}
                       
function Jt(e) {
  var t = V | H;
  return R !== null && (R.f |= st), {
    ctx: P,
    deps: null,
    effects: null,
    equals: gr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
                      
      F
    ),
    wv: 0,
    parent: R,
    ac: null
  };
}
const dt =                 Symbol("obsolete");
                       
function pi(e, t, n) {
  let r = (
                                
    R
  );
  r === null && qa();
  var a = (
                             
                          
    void 0
  ), i = qe(
                    
    F
  ), o = !C, s =                 new Set();
  return Ri(() => {
    var l = (
                           
      R
    ), c = fr();
    a = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (u) => {
        u !== At && c.reject(u);
      }).finally(zt);
    } catch (u) {
      c.reject(u), zt();
    }
    var d = (
                          
      S
    );
    if (o) {
      if ((l.f & Ye) !== 0)
        var p = Rr();
      if (
                                                                                                                         
        r.b?.is_rendered()
      )
        d.async_deriveds.get(l)?.reject(dt);
      else
        for (const u of s.values())
          u.reject(dt);
      s.add(c), d.async_deriveds.set(l, c);
    }
    const m = (u, f = void 0) => {
      p?.(), s.delete(c), f !== dt && (d.activate(), f ? (i.f |= Pe, it(i, f)) : ((i.f & Pe) !== 0 && (i.f ^= Pe), it(i, u)), d.deactivate());
    };
    c.promise.then(m, (u) => m(null, u || "unknown"));
  }), Un(() => {
    for (const l of s)
      l.reject(dt);
  }), new Promise((l) => {
    function c(d) {
      function p() {
        d === a ? l(i) : c(a);
      }
      d.then(p, p);
    }
    c(a);
  });
}
                       
function un(e) {
  const t =                 Jt(e);
  return $r(t), t;
}
                       
function vi(e) {
  const t =                 Jt(e);
  return t.equals = _r, t;
}
function mi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      J(
                             
        t[n]
      );
  }
}
function xn(e) {
  var t, n = R, r = e.parent;
  if (!Re && r !== null && e.v !== F &&                                                                                                      
  (r.f & (Z | q)) !== 0)
    return Ma(), e.v;
  Ee(r);
  try {
    e.f &= ~Ke, mi(e), t = na(e);
  } finally {
    Ee(n);
  }
  return t;
}
function Nr(e) {
  var t = xn(e);
  if (!e.equals(t) && (e.wv = Ht(), (!S?.is_fork || e.deps === null) && (S !== null ? (S.capture(e, t, !0), dn?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    z(e, B);
    return;
  }
  Re || (ie !== null ? (zn() || S?.is_fork) && ie.set(e, t) : jn(e));
}
function gi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Zt(() => {
        t.ac.abort(At), t.ac = null;
      }), t.fn !== null && (t.teardown = Ca), Et(t, 0), Hn(t));
}
function Ir(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && lt(t);
}
let $t = null, Ze = null, S = null, dn = null, ie = null, hn = null, mt = !1, en = !1, Xe = null, Rt = null;
var Kn = 0;
let bi = 1;
class we {
  id = bi++;
                                              
  #t = !1;
  linked = !0;
                             
  #o = null;
                             
  #e = null;
                                                              
  async_deriveds =                 new Map();
     
                                                                      
                                                                                                                            
                                                            
                                       
     
  current =                 new Map();
     
                                                                                                                       
                                                           
                            
     
  previous =                 new Map();
     
                                                                                         
                                                                                       
                                        
     
  #s =                 new Set();
     
                                                                                     
                                        
     
  #r =                 new Set();
     
                                                             
     
  #i = 0;
     
                                                                                
                                
     
  #n =                 new Map();
     
                                                                                
                                                                         
                                                                                                                 
     
  #l = null;
     
                                             
                     
     
  #a = [];
     
                                                 
                     
     
  #v = [];
     
                                                                               
                        
     
  #c =                 new Set();
     
                                          
                        
     
  #f =                 new Set();
     
                                                                              
                                                        
                                                                                     
                                                       
                                                      
     
  #d =                 new Map();
     
                                                                                                    
                        
     
  #m =                 new Set();
  is_fork = !1;
  #u = !1;
  constructor() {
    Ze === null ? $t = Ze = this : (Ze.#e = this, this.#o = Ze), Ze = this;
  }
  #_() {
    if (this.is_fork) return !0;
    for (const r of this.#n.keys()) {
      for (var t = r, n = !1; t.parent !== null; ) {
        if (this.#d.has(t)) {
          n = !0;
          break;
        }
        t = t.parent;
      }
      if (!n)
        return !0;
    }
    return !1;
  }
     
                                                                      
                           
     
  skip_effect(t) {
    this.#d.has(t) || this.#d.set(t, { d: [], m: [] }), this.#m.delete(t);
  }
     
                                                                   
                                                
                           
                                          
     
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = this.#d.get(t);
    if (r) {
      this.#d.delete(t);
      for (var a of r.d)
        z(a, H), n(a);
      for (a of r.m)
        z(a, pe), n(a);
    }
    this.#m.add(t);
  }
  #g() {
    this.#t = !0, Kn++ > 1e3 && (this.#p(), _i());
    for (const l of this.#c)
      this.#f.delete(l), z(l, H), this.schedule(l);
    for (const l of this.#f)
      z(l, pe), this.schedule(l);
    const t = this.#a;
    this.#a = [], this.apply();
    var n = Xe = [], r = [], a = Rt = [];
    for (const l of t)
      try {
        this.#y(l, n, r);
      } catch (c) {
        throw Pr(l), this.#_() || this.discard(), c;
      }
    if (S = null, a.length > 0) {
      var i = we.ensure();
      for (const l of a)
        i.schedule(l);
    }
    if (Xe = null, Rt = null, this.#_()) {
      this.#h(r), this.#h(n);
      for (const [l, c] of this.#d)
        Dr(l, c);
      a.length > 0 &&                       
      S.#g();
      return;
    }
    const o = this.#w();
    if (o) {
      this.#h(r), this.#h(n), o.#E(this);
      return;
    }
    this.#c.clear(), this.#f.clear();
    for (const l of this.#s) l(this);
    this.#s.clear(), dn = this, qn(r), qn(n), dn = null, this.#l?.resolve();
    var s = (
                                 
                            
      S
    );
    if (this.#i === 0 && (this.#a.length === 0 || s !== null) && this.#p(), this.#a.length > 0)
      if (s !== null) {
        const l = s;
        l.#a.push(...this.#a.filter((c) => !l.#a.includes(c)));
      } else
        s = this;
    s !== null && (_e.clear(), s.#g());
  }
     
                                                            
                                            
                         
                              
                                     
     
  #y(t, n, r) {
    t.f ^= B;
    for (var a = t.first; a !== null; ) {
      var i = a.f, o = (i & (le | Te)) !== 0, s = o && (i & B) !== 0, l = s || (i & q) !== 0 || this.#d.has(a);
      if (!l && a.fn !== null) {
        o ? a.f ^= B : (i & nt) !== 0 ? n.push(a) : St(a) && ((i & de) !== 0 && this.#f.add(a), lt(a));
        var c = a.first;
        if (c !== null) {
          a = c;
          continue;
        }
      }
      for (; a !== null; ) {
        var d = a.next;
        if (d !== null) {
          a = d;
          break;
        }
        a = a.parent;
      }
    }
  }
  #w() {
    for (var t = this.#o; t !== null; ) {
      if (!t.is_fork) {
        for (const [n, [, r]] of this.current)
          if (t.current.has(n) && !r)
            return t;
      }
      t = t.#o;
    }
    return null;
  }
     
                         
     
  #E(t) {
    for (const [r, a] of t.current)
      !this.previous.has(r) && t.previous.has(r) && this.previous.set(r, t.previous.get(r)), this.current.set(r, a);
    for (const [r, a] of t.async_deriveds) {
      const i = this.async_deriveds.get(r);
      i && a.promise.then(i.resolve).catch(i.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#c, t.#f);
    const n = (r) => {
      var a = r.reactions;
      if (a !== null && !((r.f & V) !== 0 && (r.f & (H | pe)) === 0))
        for (const s of a) {
          var i = s.f;
          if ((i & V) !== 0)
            n(
                                    
              s
            );
          else {
            var o = (
                                   
              s
            );
            i & (tt | de) && !this.async_deriveds.has(o) && (this.#f.delete(o), z(o, H), this.schedule(o));
          }
        }
    };
    for (const r of this.current.keys())
      n(r);
    this.oncommit(() => t.discard()), t.#p(), S = this, this.#g();
  }
     
                              
     
  #h(t) {
    for (var n = 0; n < t.length; n += 1)
      Cr(t[n], this.#c, this.#f);
  }
     
                                                          
                                                  
                          
                       
                                  
     
  capture(t, n, r = !1) {
    t.v !== F && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Pe) === 0 && (this.current.set(t, [n, r]), ie?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, ie = null;
  }
  flush() {
    try {
      en = !0, S = this, this.#g();
    } finally {
      Kn = 0, hn = null, Xe = null, Rt = null, en = !1, S = null, ie = null, _e.clear();
    }
  }
  discard() {
    for (const t of this.#r) t(this);
    this.#r.clear();
    for (const t of this.async_deriveds.values())
      t.reject(dt);
    this.#p(), this.#l?.resolve();
  }
     
                           
     
  register_created_effect(t) {
    this.#v.push(t);
  }
  #b() {
    for (let p = $t; p !== null; p = p.#e) {
      var t = p.id < this.id, n = [];
      for (const [m, [u, f]] of this.current) {
        if (p.current.has(m)) {
          var r = (
                                         
            p.current.get(m)[0]
          );
          if (t && u !== r)
            p.current.set(m, [u, f]);
          else
            continue;
        }
        n.push(m);
      }
      if (t)
        for (const [m, u] of this.async_deriveds) {
          const f = p.async_deriveds.get(m);
          f && u.promise.then(f.resolve).catch(f.reject);
        }
      var a = [...p.current.keys()].filter(
        (m) => !                             
        p.current.get(m)[1]
      );
      if (!(!p.#t || a.length === 0)) {
        var i = a.filter((m) => !this.current.has(m));
        if (i.length === 0)
          t && p.discard();
        else if (n.length > 0) {
          if (t)
            for (const m of this.#m)
              p.unskip_effect(m, (u) => {
                (u.f & (de | tt)) !== 0 ? p.schedule(u) : p.#h([u]);
              });
          p.activate();
          var o =                 new Set(), s =                 new Map();
          for (var l of n)
            jr(l, i, o, s);
          s =                 new Map();
          var c = [...p.current].filter(([m, u]) => {
            const f = this.current.get(m);
            return f ? f[0] !== u[0] || f[1] !== u[1] : !0;
          }).map(([m]) => m);
          if (c.length > 0)
            for (const m of this.#v)
              (m.f & (Z | q | _t)) === 0 && Dn(m, c, s) && ((m.f & (tt | de)) !== 0 ? (z(m, H), p.schedule(m)) : p.#c.add(m));
          if (p.#a.length > 0 && !p.#u) {
            p.apply();
            for (var d of p.#a)
              p.#y(d, [], []);
            p.#a = [];
          }
          p.deactivate();
        }
      }
    }
  }
     
                              
                           
     
  increment(t, n) {
    if (this.#i += 1, t) {
      let r = this.#n.get(n) ?? 0;
      this.#n.set(n, r + 1);
    }
  }
     
                              
                           
     
  decrement(t, n) {
    if (this.#i -= 1, t) {
      let r = this.#n.get(n) ?? 0;
      r === 1 ? this.#n.delete(n) : this.#n.set(n, r - 1);
    }
    this.#u || (this.#u = !0, He(() => {
      this.#u = !1, this.linked && this.flush();
    }));
  }
     
                                       
                                             
     
  transfer_effects(t, n) {
    for (const r of t)
      this.#c.add(r);
    for (const r of n)
      this.#f.add(r);
    t.clear(), n.clear();
  }
                                           
  oncommit(t) {
    this.#s.add(t);
  }
                                           
  ondiscard(t) {
    this.#r.add(t);
  }
  settled() {
    return (this.#l ??= fr()).promise;
  }
  static ensure() {
    if (S === null) {
      const t = S = new we();
      !en && !mt && He(() => {
        t.#t || t.flush();
      });
    }
    return S;
  }
  apply() {
    {
      ie = null;
      return;
    }
  }
     
    
                           
     
  schedule(t) {
    if (hn = t, t.b?.is_pending && (t.f & (nt | Gt | ur)) !== 0 && (t.f & Ye) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Xe !== null && n === R && (C === null || (C.f & V) === 0))
        return;
      if ((r & (Te | le)) !== 0) {
        if ((r & B) === 0)
          return;
        n.f ^= B;
      }
    }
    this.#a.push(n);
  }
  #p() {
    if (this.linked) {
      var t = this.#o, n = this.#e;
      t === null ? $t = n : t.#e = n, n === null ? Ze = t : n.#o = t, this.linked = !1;
    }
  }
}
function yt(e) {
  var t = mt;
  mt = !0;
  try {
    var n;
    for (e && (S !== null && !S.is_fork && S.flush(), n = e()); ; ) {
      if (fi(), S === null)
        return (
                          
          n
        );
      S.flush();
    }
  } finally {
    mt = t;
  }
}
function _i() {
  try {
    Xa();
  } catch (e) {
    be(e, hn);
  }
}
let Oe = null;
function qn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Z | q)) === 0 && St(r) && (Oe =                 new Set(), lt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Jr(r), Oe?.size > 0)) {
        _e.clear();
        for (const a of Oe) {
          if ((a.f & (Z | q)) !== 0) continue;
          const i = [a];
          let o = a.parent;
          for (; o !== null; )
            Oe.has(o) && (Oe.delete(o), i.push(o)), o = o.parent;
          for (let s = i.length - 1; s >= 0; s--) {
            const l = i[s];
            (l.f & (Z | q)) === 0 && lt(l);
          }
        }
        Oe.clear();
      }
    }
    Oe = null;
  }
}
function jr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const i = a.f;
      (i & V) !== 0 ? jr(
                              
        a,
        t,
        n,
        r
      ) : (i & (tt | de)) !== 0 && (i & H) === 0 && Dn(a, t, r) && (z(a, H), Pn(
                             
        a
      ));
    }
}
function xr(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & V) !== 0 ? xr(
                              
        n,
        t
      ) : (r & _t) !== 0 && (z(n, H), t.add(
                             
        n
      ));
    }
}
function Dn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (xt.call(t, a))
        return !0;
      if ((a.f & V) !== 0 && Dn(
                              
        a,
        t,
        n
      ))
        return n.set(
                                
          a,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Pn(e) {
  S.schedule(e);
}
function Dr(e, t) {
  if (!((e.f & le) !== 0 && (e.f & B) !== 0)) {
    (e.f & H) !== 0 ? t.d.push(e) : (e.f & pe) !== 0 && t.m.push(e), z(e, B);
    for (var n = e.first; n !== null; )
      Dr(n, t), n = n.next;
  }
}
function Pr(e) {
  z(e, B);
  for (var t = e.first; t !== null; )
    Pr(t), t = t.next;
}
function yi(e) {
  yr(), S !== null && $a();
  var t = we.ensure();
  t.is_fork = !0, ie =                 new Map();
  var n = !1, r = t.settled();
  return yt(e), {
    commit: async () => {
      if (n) {
        await r;
        return;
      }
      t.linked || Qa(), n = !0, t.is_fork = !1;
      for (var [a, [i]] of t.current)
        a.v = i, a.wv = Ht();
      yt(() => {
        var o =                 new Set();
        for (var s of t.current.keys())
          xr(s, o);
        wi(o), Ur();
      }), t.flush(), await r;
    },
    discard: () => {
      for (var a of t.current.keys())
        a.wv = Ht();
      !n && t.linked && t.discard();
    }
  };
}
let wt =                 new Set();
const _e =                 new Map();
function wi(e) {
  wt = e;
}
let zr = !1;
function qe(e, t) {
  var n = {
    f: 0,
                                                                            
    v: e,
    reactions: null,
    equals: gr,
    rv: 0,
    wv: 0
  };
  return n;
}
                       
function me(e, t) {
  const n = qe(e);
  return $r(n), n;
}
                       
function Ei(e, t = !1, n = !0) {
  const r = qe(e);
  return t || (r.equals = _r), r;
}
function ge(e, t, n = !1) {
  C !== null &&                                                                                         
                                                                
  (!he || (C.f & _t) !== 0) && kr() && (C.f & (V | de | tt | _t)) !== 0 && (ye === null || !ye.has(e)) && ai();
  let r = n ? Qe(t) : t;
  return it(e, r, Rt);
}
function it(e, t, n = null) {
  if (!e.equals(t)) {
    Re ? _e.set(e, t) : _e.has(e) || _e.set(e, e.v);
    var r = we.ensure();
    if (r.capture(e, t), (e.f & V) !== 0) {
      const a = (
                              
        e
      );
      (e.f & H) !== 0 && xn(a), ie === null && jn(a);
    }
    e.wv = Ht(), Hr(e, H, n), R !== null && (R.f & B) !== 0 && (R.f & (le | Te)) === 0 && ($ === null ? ji([e]) : $.push(e)), !r.is_fork && wt.size > 0 && !zr && Ur();
  }
  return t;
}
function Ur() {
  zr = !1;
  for (const e of wt) {
    (e.f & B) !== 0 && z(e, pe);
    let t;
    try {
      t = St(e);
    } catch {
      t = !0;
    }
    t && lt(e);
  }
  wt.clear();
}
function gt(e) {
  ge(e, e.v + 1);
}
function Hr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var a = r.length, i = 0; i < a; i++) {
      var o = r[i], s = o.f, l = (s & H) === 0;
      if (l && z(o, t), (s & _t) !== 0)
        wt.add(
                               
          o
        );
      else if ((s & V) !== 0) {
        var c = (
                                
          o
        );
        ie?.delete(c), (s & Ke) === 0 && (s & oe && (R === null || (R.f & Dt) === 0) && (o.f |= Ke), Hr(c, pe, n));
      } else if (l) {
        var d = (
                               
          o
        );
        (s & de) !== 0 && Oe !== null && Oe.add(d), n !== null ? n.push(d) : Pn(d);
      }
    }
}
function Qe(e) {
  if (typeof e != "object" || e === null || Me in e || dr in e)
    return e;
  const t = Tn(e);
  if (t !== Sa && t !== Ta)
    return e;
  var n =                 new Map(), r = Ot(e), a =                 me(0), i = Ve, o = (s) => {
    if (Ve === i)
      return s();
    var l = C, c = Ve;
    ce(null), Jn(i);
    var d = s();
    return ce(l), Jn(c), d;
  };
  return r && n.set("length",                 me(
                        
    e.length
  )), new Proxy(
                      
    e,
    {
      defineProperty(s, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ni();
        var d = n.get(l);
        return d === void 0 ? o(() => {
          var p =                 me(c.value);
          return n.set(l, p), p;
        }) : ge(d, c.value, !0), !0;
      },
      deleteProperty(s, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in s) {
            const d = o(() =>                 me(F));
            n.set(l, d), gt(a);
          }
        } else
          ge(c, F), gt(a);
        return !0;
      },
      get(s, l, c) {
        if (l === Me)
          return e;
        var d = n.get(l), p = l in s;
        if (d === void 0 && (!p || vt(s, l)?.writable) && (d = o(() => {
          var u = Qe(p ? s[l] : F), f =                 me(u);
          return f;
        }), n.set(l, d)), d !== void 0) {
          var m = T(d);
          return m === F ? void 0 : m;
        }
        return Reflect.get(s, l, c);
      },
      getOwnPropertyDescriptor(s, l) {
        var c = Reflect.getOwnPropertyDescriptor(s, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = T(d));
        } else if (c === void 0) {
          var p = n.get(l), m = p?.v;
          if (p !== void 0 && m !== F)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return c;
      },
      has(s, l) {
        if (l === Me)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== F || Reflect.has(s, l);
        if (c !== void 0 || R !== null && (!d || vt(s, l)?.writable)) {
          c === void 0 && (c = o(() => {
            var m = d ? Qe(s[l]) : F, u =                 me(m);
            return u;
          }), n.set(l, c));
          var p = T(c);
          if (p === F)
            return !1;
        }
        return d;
      },
      set(s, l, c, d) {
        var p = n.get(l), m = l in s;
        if (r && l === "length")
          for (var u = c; u <                              
          p.v; u += 1) {
            var f = n.get(u + "");
            f !== void 0 ? ge(f, F) : u in s && (f = o(() =>                 me(F)), n.set(u + "", f));
          }
        if (p === void 0)
          (!m || vt(s, l)?.writable) && (p = o(() =>                 me(void 0)), ge(p, Qe(c)), n.set(l, p));
        else {
          m = p.v !== F;
          var w = o(() => Qe(c));
          ge(p, w);
        }
        var E = Reflect.getOwnPropertyDescriptor(s, l);
        if (E?.set && E.set.call(d, c), !m) {
          if (r && typeof l == "string") {
            var v = (
                                           
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= v.v && ge(v, h + 1);
          }
          gt(a);
        }
        return !0;
      },
      ownKeys(s) {
        T(a);
        var l = Reflect.ownKeys(s).filter((p) => {
          var m = n.get(p);
          return m === void 0 || m.v !== F;
        });
        for (var [c, d] of n)
          d.v !== F && !(c in s) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        ri();
      }
    }
  );
}
function Yn(e) {
  try {
    if (e !== null && typeof e == "object" && Me in e)
      return e[Me];
  } catch {
  }
  return e;
}
function Fr(e, t) {
  return Object.is(Yn(e), Yn(t));
}
var Wn, Mr, Br, Vr;
function pn() {
  if (Wn === void 0) {
    Wn = window, Mr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Br = vt(t, "firstChild").get, Vr = vt(t, "nextSibling").get, Vn(e) && (e[cn] = void 0, e[hr] = null, e[xa] = void 0, e.__e = void 0), Vn(n) && (n[fn] = void 0);
  }
}
function Ce(e = "") {
  return document.createTextNode(e);
}
                       
function ot(e) {
  return (
                                      
    Br.call(e)
  );
}
                       
function Ne(e) {
  return (
                                      
    Vr.call(e)
  );
}
function Se(e, t) {
  if (!j)
    return                 ot(e);
  var n =                 ot(D);
  if (n === null)
    n = D.appendChild(Ce());
  else if (t && n.nodeType !== Rn) {
    var r = Ce();
    return n?.before(r), se(r), r;
  }
  return t && qr(
                       
    n
  ), se(n), n;
}
function te(e, t = !1) {
  if (!j)
    return                 ot(e);
  var n = Se(e, t);
  return ke(e), n;
}
function ae(e, t = 1, n = !1) {
  let r = j ? D : e;
  for (var a; t--; )
    a = r, r =                            
                    Ne(r);
  if (!j)
    return r;
  if (n) {
    if (r?.nodeType !== Rn) {
      var i = Ce();
      return r === null ? a?.after(i) : r.before(i), se(i), i;
    }
    qr(
                         
      r
    );
  }
  return se(r), r;
}
function Gr(e) {
  e.textContent = "";
}
function Kr() {
  return !1;
}
function Oi(e, t, n) {
  return (
                                                                                             
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function qr(e) {
  if (
                         
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Rn; )
    t.remove(), e.nodeValue +=                      
    t.nodeValue, t = e.nextSibling;
}
function Ai(e) {
  var t = R;
  if (t === null)
    return C.f |= Pe, e;
  if ((t.f & Ye) === 0 && (t.f & nt) === 0)
    throw e;
  be(e, t);
}
function be(e, t) {
  if (!(t !== null && (t.f & Z) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & ln) !== 0 && (t.f & (Z | sn)) === 0) {
        if ((t.f & Ye) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (n) {
          e = n;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
function Li(e) {
  R === null && (C === null && Ja(), Za()), Re && Wa();
}
function ki(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ie(e, t) {
  var n = R;
  n !== null && (n.f & q) !== 0 && (e |= q);
  var r = {
    ctx: P,
    deps: null,
    nodes: null,
    f: e | H | oe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  S?.register_created_effect(r);
  var a = r;
  if ((e & nt) !== 0)
    Xe !== null ? Xe.push(r) : we.ensure().schedule(r);
  else if (t !== null) {
    try {
      lt(r);
    } catch (o) {
      throw J(r), o;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last &&                                      
    (a.f & st) === 0 && (a = a.first, (e & de) !== 0 && (e & Ge) !== 0 && a !== null && (a.f |= Ge));
  }
  if (a !== null && (a.parent = n, n !== null && ki(a, n), C !== null && (C.f & V) !== 0 && (e & Te) === 0)) {
    var i = (
                            
      C
    );
    (i.effects ??= []).push(a);
  }
  return r;
}
function zn() {
  return C !== null && !he;
}
function Un(e) {
  const t = Ie(Gt, null);
  return z(t, B), t.teardown = e, t;
}
function Si(e) {
  Li();
  var t = (
                         
    R.f
  ), n = !C && (t & le) !== 0 && P !== null && !P.i;
  if (n) {
    var r = (
                                     
      P
    );
    (r.e ??= []).push(e);
  } else
    return Yr(e);
}
function Yr(e) {
  return Ie(nt | Ia, e);
}
function Ti(e) {
  we.ensure();
  const t = Ie(Te | st, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Be(t, () => {
      J(t), r(void 0);
    }) : (J(t), r(void 0));
  });
}
function Ci(e) {
  return Ie(nt, e);
}
function Ri(e) {
  return Ie(tt | st, e);
}
function Wr(e, t = 0) {
  return Ie(Gt | t, e);
}
function ze(e, t = [], n = [], r = []) {
  di(r, t, n, (a) => {
    Ie(Gt, () => {
      e(...a.map(T));
    });
  });
}
function Xt(e, t = 0) {
  var n = Ie(de | t, e);
  return n;
}
function ne(e) {
  return Ie(le | st, e);
}
function Zr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Re, r = C;
    Zn(!0), ce(null);
    try {
      t.call(null);
    } catch (a) {
      be(a, e.parent);
    } finally {
      Zn(n), ce(r);
    }
  }
}
function Hn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && Zt(() => {
      a.abort(At);
    });
    var r = n.next;
    (n.f & Te) !== 0 ? n.parent = null : J(n, t), n = r;
  }
}
function Ni(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & le) === 0 && J(t), t = n;
  }
}
function J(e, t = !0) {
  var n = !1;
  (t || (e.f & Na) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ii(
    e.nodes.start,
                               
    e.nodes.end
  ), n = !0), e.f |= sn, Hn(e, t && !n), Et(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  Zr(e), e.f ^= sn, e.f |= Z;
  var a = e.parent;
  a !== null && a.first !== null && Jr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ii(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null :                 Ne(e);
    e.remove(), e = n;
  }
}
function Jr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Be(e, t, n = !0) {
  var r = [];
  e.f |= Cn, Xr(e, r, !0);
  var a = () => {
    n && J(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var o = () => --i || a();
    for (var s of r)
      s.out(o);
  } else
    a();
}
function Xr(e, t, n) {
  if ((e.f & q) === 0) {
    e.f ^= q;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const s of r)
        (s.is_global || n) && t.push(s);
    for (var a = e.first; a !== null; ) {
      var i = a.next;
      if ((a.f & Te) === 0) {
        var o = (a.f & Ge) !== 0 ||                                                             
                                                                     
                                                                         
        (a.f & le) !== 0 && (e.f & de) !== 0;
        Xr(a, t, o ? n : !1);
      }
      a = i;
    }
  }
}
function Ut(e) {
  e.f &= ~Cn, Qr(e, !0);
}
function Qr(e, t) {
  if ((e.f & Cn) === 0 && (e.f & q) !== 0) {
    e.f ^= q, (e.f & B) === 0 && (z(e, H), we.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & Ge) !== 0 || (n.f & le) !== 0;
      Qr(n, a ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
function Fn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var a = n === r ? null :                 Ne(n);
      t.append(n), n = a;
    }
}
let Nt = !1, Re = !1;
function Zn(e) {
  Re = e;
}
let C = null, he = !1;
function ce(e) {
  C = e;
}
let R = null;
function Ee(e) {
  R = e;
}
let ye = null;
function $r(e) {
  C !== null && (ye ??=                 new Set()).add(e);
}
let W = null, Q = 0, $ = null;
function ji(e) {
  $ = e;
}
let ea = 1, Fe = 0, Ve = Fe;
function Jn(e) {
  Ve = e;
}
function Ht() {
  return ++ea;
}
function St(e) {
  var t = e.f;
  if ((t & H) !== 0)
    return !0;
  if (t & V && (e.f &= ~Ke), (t & pe) !== 0) {
    for (var n = (
                            
      e.deps
    ), r = n.length, a = 0; a < r; a++) {
      var i = n[a];
      if (St(
                              
        i
      ) && Nr(
                              
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & oe) !== 0 &&                                                                   
                                                                
    ie === null && z(e, B);
  }
  return !1;
}
function ta(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ye !== null && ye.has(e)))
    for (var a = 0; a < r.length; a++) {
      var i = r[a];
      (i.f & V) !== 0 ? ta(
                              
        i,
        t,
        !1
      ) : t === i && (n ? z(i, H) : (i.f & B) !== 0 && z(i, pe), Pn(
                             
        i
      ));
    }
}
function na(e) {
  var t = W, n = Q, r = $, a = C, i = ye, o = P, s = he, l = Ve, c = e.f;
  W =                              
  null, Q = 0, $ = null, C = (c & (le | Te)) === 0 ? e : null, ye = null, at(e.ctx), he = !1, Ve = ++Fe, e.ac !== null && (Zt(() => {
    e.ac.abort(At);
  }), e.ac = null);
  try {
    e.f |= Dt;
    var d = (
                             
      e.fn
    ), p = d();
    e.f |= Ye;
    var m = Xn(e);
    if (kr() && $ !== null && !he && m !== null && (e.f & (V | pe | H)) === 0)
      for (var u = 0; u <                        
      $.length; u++)
        ta(
          $[u],
                               
          e
        );
    if (a !== null && a !== e) {
      if (Fe++, a.deps !== null)
        for (let f = 0; f < n; f += 1)
          a.deps[f].rv = Fe;
      if (t !== null)
        for (const f of t)
          f.rv = Fe;
      $ !== null && (r === null ? r = $ : r.push(...                       
      $));
    }
    return (e.f & Pe) !== 0 && (e.f ^= Pe), p;
  } catch (f) {
    return Xn(e), Ai(f);
  } finally {
    e.f ^= Dt, W = t, Q = n, $ = r, C = a, ye = i, at(o), he = s, Ve = l;
  }
}
function Xn(e) {
  var t = e.deps, n = S?.is_fork;
  if (W !== null) {
    var r;
    if (n || Et(e, Q), t !== null && Q > 0)
      for (t.length = Q + W.length, r = 0; r < W.length; r++)
        t[Q + r] = W[r];
    else
      e.deps = t = W;
    if (zn() && (e.f & oe) !== 0)
      for (r = Q; r < t.length; r++)
        (t[r].reactions ??= []).push(e);
  } else !n && t !== null && Q < t.length && (Et(e, Q), t.length = Q);
  return t;
}
function xi(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = ka.call(n, e);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  if (n === null && (t.f & V) !== 0 &&                                                                                             
                                                                                                
                                                                                          
  (W === null || !xt.call(W, t))) {
    var i = (
                            
      t
    );
    (i.f & oe) !== 0 && (i.f ^= oe, i.f &= ~Ke), i.v !== F && jn(i), i.ac !== null && Zt(() => {
      i.ac.abort(At), i.ac = null, z(i, H);
    }), gi(i), Et(i, 0);
  }
}
function Et(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      xi(e, n[r]);
}
function lt(e) {
  var t = e.f;
  if ((t & Z) === 0) {
    z(e, B);
    var n = R, r = Nt;
    R = e, Nt = (t & (le | Te)) === 0;
    try {
      (t & (de | ur)) !== 0 ? Ni(e) : Hn(e), Zr(e);
      var a = na(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = ea;
      var i;
    } finally {
      Nt = r, R = n;
    }
  }
}
async function Di() {
  await Promise.resolve(), yt();
}
function Pi() {
  return we.ensure().settled();
}
function T(e) {
  var t = e.f, n = (t & V) !== 0;
  if (C !== null && !he) {
    var r = R !== null && (R.f & Z) !== 0;
    if (!r && (ye === null || !ye.has(e))) {
      var a = C.deps;
      if ((C.f & Dt) !== 0)
        e.rv < Fe && (e.rv = Fe, W === null && a !== null && a[Q] === e ? Q++ : W === null ? W = [e] : W.push(e));
      else {
        C.deps ??= [], xt.call(C.deps, e) || C.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [C] : xt.call(i, C) || i.push(C);
      }
    }
  }
  if (Re && _e.has(e))
    return _e.get(e);
  if (n) {
    var o = (
                            
      e
    );
    if (Re) {
      var s = o.v;
      return ((o.f & B) === 0 && o.reactions !== null || aa(o)) && (s = xn(o)), _e.set(o, s), s;
    }
    var l = (o.f & oe) === 0 && !he && C !== null && (Nt || (C.f & oe) !== 0), c = (o.f & Ye) === 0;
    St(o) && (l && (o.f |= oe), Nr(o)), l && !c && (Ir(o), ra(o));
  }
  if (ie?.has(e))
    return ie.get(e);
  if ((e.f & Pe) !== 0)
    throw e.v;
  return e.v;
}
function ra(e) {
  if (e.f |= oe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & V) !== 0 && (t.f & oe) === 0 && (Ir(
                              
        t
      ), ra(
                              
        t
      ));
}
function aa(e) {
  if (e.v === F) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (_e.has(t) || (t.f & V) !== 0 && aa(
                            
      t
    ))
      return !0;
  return !1;
}
function ft(e) {
  var t = he;
  try {
    return he = !0, e();
  } finally {
    he = t;
  }
}
function zi(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Me in e)
      vn(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Me in n && vn(n);
      }
  }
}
function vn(e, t =                 new Set()) {
  if (typeof e == "object" && e !== null &&                                          
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        vn(e[r], t);
      } catch {
      }
    const n = Tn(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = cr(n);
      for (let a in r) {
        const i = r[a].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
const Ui = ["touchstart", "touchmove"];
function Hi(e) {
  return Ui.includes(e);
}
const ht =                 Symbol("events"), ia =                 new Set(), mn =                 new Set();
function Fi(e, t, n) {
  (t[ht] ??= {})[e] = n;
}
function Mi(e) {
  for (var t = 0; t < e.length; t++)
    ia.add(e[t]);
  for (var n of mn)
    n(e);
}
let tn = null, nn = !1;
function Qn(e) {
  var t = this, n = (
                       
    t.ownerDocument
  ), r = e.type, a = e.composedPath?.() || [], i = (
                                 
    a[0] || e.target
  );
  tn = e, nn || (nn = !0, setTimeout(() => {
    nn = !1, tn = null;
  }));
  var o = 0, s = tn === e && e[ht];
  if (s) {
    var l = a.indexOf(s);
    if (l !== -1 && (t === document || t ===                   
    window)) {
      e[ht] = t;
      return;
    }
    var c = a.indexOf(t);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (i =                       
  a[o] || e.target, i !== t) {
    sr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = C, p = R;
    ce(null), Ee(null);
    try {
      for (var m, u = []; i !== null && i !== t; ) {
        try {
          var f = i[ht]?.[r];
          f != null && (!                  
          i.disabled ||                                                                                           
                                                                                                     
          e.target === i) && f.call(i, e);
        } catch (w) {
          m ? u.push(w) : m = w;
        }
        if (e.cancelBubble) break;
        o++, i = o < a.length ? (
                                
          a[o]
        ) : null;
      }
      if (m) {
        for (let w of u)
          queueMicrotask(() => {
            throw w;
          });
        throw m;
      }
    } finally {
      e[ht] = t, delete e.currentTarget, ce(d), Ee(p);
    }
  }
}
const Bi = (
                                                                                                             
  globalThis?.window?.trustedTypes &&                 globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
                               
    createHTML: (e) => e
  })
);
function Vi(e) {
  return (
                         
    Bi?.createHTML(e) ?? e
  );
}
function oa(e) {
  var t = Oi("template");
  return t.innerHTML = Vi(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ft(e, t) {
  var n = (
                         
    R
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
                       
function We(e, t) {
  var n = (t & Ha) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (j)
      return Ft(D, null), D;
    r === void 0 && (r = oa(a ? e : "<!>" + e), r =                            
                    ot(r));
    var i = (
                                 
      n || Mr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Ft(i, i), i;
  };
}
function De(e, t) {
  if (j) {
    var n = (
                                                    
      R
    );
    ((n.f & Ye) === 0 || n.nodes.end === null) && (n.nodes.end = D), kt();
    return;
  }
  e !== null && e.before(
                       
    t
  );
}
function Gi(e) {
  let t = 0, n = qe(0), r;
  return () => {
    zn() && (T(n), Wr(() => (t === 0 && (r = ft(() => e(() => gt(n)))), t += 1, () => {
      He(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, gt(n));
      });
    })));
  };
}
var Ki = Ge | st;
function qi(e, t, n, r) {
  new Yi(e, t, n, r);
}
class Yi {
                                
  parent;
  is_pending = !1;
     
                                                                                                           
                                                             
                                        
     
  transform_error;
                             
  #t;
                                    
  #o = j ? D : null;
                              
  #e;
                                         
  #s;
                       
  #r;
                              
  #i = null;
                              
  #n = null;
                              
  #l = null;
                                        
  #a = null;
  #v = 0;
  #c = 0;
  #f = !1;
                            
  #d =                 new Set();
                            
  #m =                 new Set();
     
                                                                          
                                                                     
                                                                       
                                    
                                  
     
  #u = null;
  #_ = Gi(() => (this.#u = qe(this.#v), () => {
    this.#u = null;
  }));
     
                               
                                 
                                               
                                                                         
     
  constructor(t, n, r, a) {
    this.#t = t, this.#e = n, this.#s = (i) => {
      var o = (
                             
        R
      );
      o.b = this, o.f |= ln, r(i);
    }, this.parent =                      
    R.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), this.#r = Xt(() => {
      if (j) {
        const i = (
                                
          this.#o
        );
        kt();
        const o = i.data === Nn;
        if (i.data.startsWith(Gn)) {
          const l = JSON.parse(i.data.slice(Gn.length));
          this.#y(l);
        } else o ? this.#E() : this.#g();
      } else
        this.#h();
    }, Ki), j && (this.#t = D);
  }
  #g() {
    try {
      this.#i = ne(() => this.#s(this.#t));
    } catch (t) {
      this.error(t);
    }
  }
     
                                                                                      
     
  #y(t) {
    const n = this.#e.failed, { reset: r, invoke_onerror: a } = this.#w(t);
    He(a), n && (this.#l = ne(() => {
      n(
        this.#t,
        () => t,
        () => r
      );
    }));
  }
     
                                                                              
                                                 
                           
                                                                 
     
  #w(t) {
    var n = !1, r = !1;
    const a = () => {
      if (n) {
        Ga();
        return;
      }
      n = !0, r && ii(), this.#l !== null && Be(this.#l, () => {
        this.#l = null;
      }), this.#p(() => {
        this.#h();
      });
    };
    return { reset: a, invoke_onerror: () => {
      try {
        r = !0, this.#e.onerror?.(t, a), r = !1;
      } catch (o) {
        be(o, this.#r && this.#r.parent);
      }
    } };
  }
  #E() {
    const t = this.#e.pending;
    t && (this.is_pending = !0, this.#n = ne(() => t(this.#t)), He(() => {
      var n = this.#a = document.createDocumentFragment(), r = Ce(), a = !1;
      if (n.append(r), this.#i = this.#p(() => {
        try {
          return ne(() => this.#s(r));
        } catch (i) {
          try {
            this.error(i), a = !0;
          } catch (o) {
            be(o, this.#r.parent);
          }
          return null;
        }
      }), this.#i === null) {
        this.#a = null, a && this.#b(
                              
          S
        );
        return;
      }
      this.#c === 0 && (this.#t.before(n), this.#a = null, Be(
                             
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.#b(
                            
        S
      ));
    }));
  }
  #h() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#c = 0, this.#v = 0, this.#i = ne(() => {
        this.#s(this.#t);
      }), this.#c > 0) {
        var t = this.#a = document.createDocumentFragment();
        Fn(this.#i, t);
        const n = (
                                               
          this.#e.pending
        );
        this.#n = ne(() => n(this.#t));
      } else
        this.#b(
                              
          S
        );
    } catch (n) {
      this.error(n);
    }
  }
     
                         
     
  #b(t) {
    this.is_pending = !1, t.transfer_effects(this.#d, this.#m);
  }
     
                                                                          
                           
     
  defer_effect(t) {
    Cr(t, this.#d, this.#m);
  }
     
                                                                                          
                       
     
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
     
                
                        
     
  #p(t) {
    var n = R, r = C, a = P;
    Ee(this.#r), ce(this.#r), at(this.#r.ctx);
    try {
      return we.ensure(), t();
    } finally {
      Ee(n), ce(r), at(a);
    }
  }
     
                                                                                     
                                                                                
                      
                         
     
  #O(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#O(t, n);
      return;
    }
    this.#c += t, this.#c === 0 && (this.#b(n), this.#n && Be(this.#n, () => {
      this.#n = null;
    }), this.#a && (this.#t.before(this.#a), this.#a = null));
  }
     
                                                                            
                                                                         
                                      
                      
                         
     
  update_pending_count(t, n) {
    this.#O(t, n), this.#v += t, !(!this.#u || this.#f) && (this.#f = !0, He(() => {
      this.#f = !1, this.#u && it(this.#u, this.#v);
    }));
  }
  get_effect_pending() {
    return this.#_(), T(
                                   
      this.#u
    );
  }
                               
  error(t) {
    if (!this.#e.onerror && !this.#e.failed)
      throw t;
    S?.is_fork ? (this.#i && S.skip_effect(this.#i), this.#n && S.skip_effect(this.#n), this.#l && S.skip_effect(this.#l), S.oncommit(() => {
      this.#A(t);
    })) : this.#A(t);
  }
     
                           
     
  #A(t) {
    this.#i && (J(this.#i), this.#i = null), this.#n && (J(this.#n), this.#n = null), this.#l && (J(this.#l), this.#l = null), j && (se(
                                 
      this.#o
    ), vr(), se(Pt()));
    let n = this.#e.failed;
    const r = (a) => {
      const { reset: i, invoke_onerror: o } = this.#w(a);
      o(), n && (this.#l = this.#p(() => {
        try {
          return ne(() => {
            var s = (
                                   
              R
            );
            s.b = this, s.f |= ln, n(
              this.#t,
              () => a,
              () => i
            );
          });
        } catch (s) {
          return be(
            s,
                                 
            this.#r.parent
          ), null;
        }
      }));
    };
    He(() => {
      var a;
      try {
        a = this.transform_error(t);
      } catch (i) {
        be(i, this.#r && this.#r.parent);
        return;
      }
      a !== null && typeof a == "object" && typeof                   
      a.then == "function" ? a.then(
        r,
                                 
        (i) => be(i, this.#r && this.#r.parent)
      ) : r(a);
    });
  }
}
function re(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !==                   
  (e[fn] ??= e.nodeValue) && (e[fn] = n, e.nodeValue = `${n}`);
}
function Mn(e, t) {
  return la(e, t);
}
function Wi(e, t) {
  pn(), t.intro = t.intro ?? !1;
  const n = t.target, r = j, a = D;
  try {
    for (var i =                 ot(n); i && (i.nodeType !== Lt ||                       
    i.data !== pr); )
      i =                 Ne(i);
    if (!i)
      throw rt;
    Le(!0), se(
                            
      i
    );
    const o = la(e, { ...t, anchor: i });
    return Le(!1),                        
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((s) => s.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== rt && console.warn("Failed to hydrate: ", o), t.recover === !1 && ti(), pn(), Gr(n), Le(!1), Mn(e, t);
  } finally {
    Le(r), se(a);
  }
}
const Tt =                 new Map();
function la(e, { target: t, anchor: n, props: r = {}, events: a, context: i, intro: o = !0, transformError: s }) {
  pn();
  var l = void 0, c = Ti(() => {
    var d = n ?? t.appendChild(Ce());
    qi(
                                 
      d,
      {
        pending: () => {
        }
      },
      (u) => {
        Yt({});
        var f = (
                                         
          P
        );
        if (i && (f.c = i), a && (r.$$events = a), j && Ft(
                                     
          u,
          null
        ), l = e(u, r) || Lr(), j && (R.nodes.end = D, D === null || D.nodeType !== Lt ||                       
        D.data !== In))
          throw Kt(), rt;
        Wt();
      },
      s
    );
    var p =                 new Set(), m = (u) => {
      for (var f = 0; f < u.length; f++) {
        var w = u[f];
        if (!p.has(w)) {
          p.add(w);
          var E = Hi(w);
          for (const b of [t, document]) {
            var v = Tt.get(b);
            v === void 0 && (v =                 new Map(), Tt.set(b, v));
            var h = v.get(w);
            h === void 0 ? (b.addEventListener(w, Qn, { passive: E }), v.set(w, 1)) : v.set(w, h + 1);
          }
        }
      }
    };
    return m(Vt(ia)), mn.add(m), () => {
      for (var u of p)
        for (const E of [t, document]) {
          var f = (
                                              
            Tt.get(E)
          ), w = (
                                 
            f.get(u)
          );
          --w == 0 ? (E.removeEventListener(u, Qn), f.delete(u), f.size === 0 && Tt.delete(E)) : f.set(u, w);
        }
      mn.delete(m), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return gn.set(l, c), l;
}
let gn =                 new WeakMap();
function bn(e, t) {
  const n = gn.get(e);
  return n ? (gn.delete(e), n(t)) : Promise.resolve();
}
class sa {
                             
  anchor;
                                
  #t =                 new Map();
     
                                                                   
                                                                      
             
        
                    
         
            
         
          
        
                                                                 
                             
     
  #o =                 new Map();
     
                                                                                          
                                                     
                             
     
  #e =                 new Map();
     
                                                
                     
     
  #s =                 new Set();
     
                                                                     
                                             
     
  #r = !0;
     
                                 
                                
     
  constructor(t, n = !0) {
    this.anchor = t, this.#r = n;
  }
     
                         
     
  #i = (t) => {
    if (this.#t.has(t)) {
      var n = (
                          
        this.#t.get(t)
      ), r = this.#o.get(n);
      if (r)
        Ut(r), this.#s.delete(n);
      else {
        var a = this.#e.get(n);
        a && (Ut(a.effect), this.#o.set(n, a.effect), this.#e.delete(n), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), r = a.effect);
      }
      for (const [i, o] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const s = this.#e.get(o);
        s && (J(s.effect), this.#e.delete(o));
      }
      for (const [i, o] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const s = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var c = document.createDocumentFragment();
            Fn(o, c), c.append(Ce()), this.#e.set(i, { effect: o, fragment: c });
          } else
            J(o);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !r ? (this.#s.add(i), Be(o, s, !1)) : s();
      }
    }
  };
     
                         
     
  #n = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, a] of this.#e)
      n.includes(r) || (J(a.effect), this.#e.delete(r));
  };
     
    
                     
                                                        
     
  ensure(t, n) {
    var r = (
                          
      S
    ), a = Kr();
    if (n && !this.#o.has(t) && !this.#e.has(t))
      if (a) {
        var i = document.createDocumentFragment(), o = Ce();
        i.append(o), this.#e.set(t, {
          effect: ne(() => n(o)),
          fragment: i
        });
      } else
        this.#o.set(
          t,
          ne(() => n(this.anchor))
        );
    if (this.#t.set(r, t), a) {
      for (const [s, l] of this.#o)
        s === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [s, l] of this.#e)
        s === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(this.#i), r.ondiscard(this.#n);
    } else
      j && (this.anchor = D), this.#i(r);
  }
}
function It(e, t, n = !1) {
  var r;
  j && (r = D, kt());
  var a = new sa(e), i = n ? Ge : 0;
  function o(s, l) {
    if (j) {
      var c = mr(
                                   
        r
      );
      if (s !== parseInt(c.substring(1))) {
        var d = Pt();
        se(d), a.anchor = d, Le(!1), a.ensure(s, l), Le(!0);
        return;
      }
    }
    a.ensure(s, l);
  }
  Xt(() => {
    var s = !1;
    t((l, c = 0) => {
      s = !0, o(c, l);
    }), s || o(-1, null);
  }, i);
}
function Zi(e, t, n) {
  for (var r = [], a = t.length, i, o = t.length, s = 0; s < a; s++) {
    let p = t[s];
    Be(
      p,
      () => {
        if (i) {
          if (i.pending.delete(p), i.done.add(p), i.pending.size === 0) {
            var m = (
                                                
              e.outrogroups
            );
            _n(e, Vt(i.done)), m.delete(i), m.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = r.length === 0 && n !== null && e.pending.size === 0;
    if (l) {
      var c = (
                              
        n
      ), d = (
                              
        c.parentNode
      );
      Gr(d), d.append(c), e.items.clear();
    }
    _n(e, t, !l);
  } else
    i = {
      pending: new Set(t),
      done:                 new Set()
    }, (e.outrogroups ??=                 new Set()).add(i);
}
function _n(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r =                 new Set();
    for (const o of e.pending.values())
      for (const s of o)
        r.add(
                                 
          e.items.get(s).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var i = t[a];
    if (r?.has(i)) {
      i.f |= Ae;
      const o = document.createDocumentFragment();
      Fn(i, o);
    } else
      J(t[a], n);
  }
}
var $n;
function Ji(e, t, n, r, a, i = null) {
  var o = e, s =                 new Map();
  j && kt();
  var l = null, c =                 vi(() => {
    var v = n();
    return (
                        
      Ot(v) ? v : v == null ? [] : Vt(v)
    );
  }), d, p =                 new Map(), m = !0;
  function u(v) {
    (E.effect.f & Z) === 0 && (E.pending.delete(v), E.fallback = l, Xi(E, d, o, t, r), l !== null && (d.length === 0 ? (l.f & Ae) === 0 ? Ut(l) : (l.f ^= Ae, pt(l, null, o)) : Be(l, () => {
      l = null;
    })));
  }
  function f(v) {
    E.pending.delete(v);
  }
  var w = Xt(() => {
    d =                   
    T(c);
    var v = d.length;
    let h = !1;
    if (j) {
      var b = mr(o) === Nn;
      b !== (v === 0) && (o = Pt(), se(o), Le(!1), h = !0);
    }
    for (var _ =                 new Set(), y = (
                          
      S
    ), O = Kr(), L = 0; L < v; L += 1) {
      j && D.nodeType === Lt &&                       
      D.data === In && (o =                       
      D, h = !0, Le(!1));
      var k = d[L], I = r(k, L), N = m ? null : s.get(I);
      N ? (N.v && it(N.v, k), N.i && it(N.i, L), O && y.unskip_effect(N.e)) : (N = Qi(
        s,
        m ? o : $n ??= Ce(),
        k,
        I,
        L,
        a,
        t,
        n
      ), m || (N.e.f |= Ae), s.set(I, N)), _.add(I);
    }
    if (v === 0 && i && !l && (m ? l = ne(() => i(o)) : (l = ne(() => i($n ??= Ce())), l.f |= Ae)), v > _.size && Ya(), j && v > 0 && se(Pt()), !m)
      if (p.set(y, _), O) {
        for (const [U, G] of s)
          _.has(U) || y.skip_effect(G.e);
        y.oncommit(u), y.ondiscard(f);
      } else
        u(y);
    h && Le(!0), T(c);
  }), E = { effect: w, items: s, pending: p, outrogroups: null, fallback: l };
  m = !1, j && (o = D);
}
function ut(e) {
  for (; e !== null && (e.f & le) === 0; )
    e = e.next;
  return e;
}
function Xi(e, t, n, r, a) {
  var i = t.length, o = e.items, s = ut(e.effect.first), l, c = null, d = [], p = [], m, u, f, w;
  for (w = 0; w < i; w += 1) {
    if (m = t[w], u = a(m, w), f =                        
    o.get(u).e, e.outrogroups !== null)
      for (const k of e.outrogroups)
        k.pending.delete(f), k.done.delete(f);
    if ((f.f & q) !== 0 && Ut(f), (f.f & Ae) !== 0)
      if (f.f ^= Ae, f === s)
        pt(f, null, n);
      else {
        var E = c ? c.next : s;
        f === e.effect.last && (e.effect.last = f.prev), f.prev && (f.prev.next = f.next), f.next && (f.next.prev = f.prev), xe(e, c, f), xe(e, f, E), pt(f, E, n), c = f, d = [], p = [], s = ut(c.next);
        continue;
      }
    if (f !== s) {
      if (l !== void 0 && l.has(f)) {
        if (d.length < p.length) {
          var v = p[0], h;
          c = v.prev;
          var b = d[0], _ = d[d.length - 1];
          for (h = 0; h < d.length; h += 1)
            pt(d[h], v, n);
          for (h = 0; h < p.length; h += 1)
            l.delete(p[h]);
          xe(e, b.prev, _.next), xe(e, c, b), xe(e, _, v), s = v, c = _, w -= 1, d = [], p = [];
        } else
          l.delete(f), pt(f, s, n), xe(e, f.prev, f.next), xe(e, f, c === null ? e.effect.first : c.next), xe(e, c, f), c = f;
        continue;
      }
      for (d = [], p = []; s !== null && s !== f; )
        (l ??=                 new Set()).add(s), p.push(s), s = ut(s.next);
      if (s === null)
        continue;
    }
    (f.f & Ae) === 0 && d.push(f), c = f, s = ut(f.next);
  }
  if (e.outrogroups !== null) {
    for (const k of e.outrogroups)
      k.pending.size === 0 && (_n(e, Vt(k.done)), e.outrogroups?.delete(k));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || l !== void 0) {
    var y = [];
    if (l !== void 0)
      for (f of l)
        (f.f & q) === 0 && y.push(f);
    for (; s !== null; )
      (s.f & q) === 0 && s !== e.fallback && y.push(s), s = ut(s.next);
    var O = y.length;
    if (O > 0) {
      var L = null;
      Zi(e, y, L);
    }
  }
}
function Qi(e, t, n, r, a, i, o, s) {
  var l = (o & Pa) !== 0 ? (o & Ua) === 0 ?                 Ei(n, !1, !1) : qe(n) : null, c = (o & za) !== 0 ? qe(a) : null;
  return {
    v: l,
    i: c,
    e: ne(() => (i(t, l ?? n, c ?? a, s), () => {
      e.delete(r);
    }))
  };
}
function pt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, a = e.nodes.end, i = t && (t.f & Ae) === 0 ? (
                                
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
                                   
                        Ne(r)
      );
      if (i.before(r), r === a)
        return;
      r = o;
    }
}
function xe(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function $i(e, t, ...n) {
  var r = new sa(e);
  Xt(() => {
    const a = t() ?? null;
    r.ensure(a, a && ((i) => a(i, ...n)));
  }, Ge);
}
function eo(e) {
  return (t, ...n) => {
    var r = e(...n), a;
    if (j)
      a =                       
      D, kt();
    else {
      var i = r.render().trim(), o = oa(i);
      a =                       
                      ot(o), t.before(a);
    }
    const s = r.setup?.(a);
    Ft(a, a), typeof s == "function" && Un(s);
  };
}
function to(e, t, n) {
  Ci(() => {
    var r = ft(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var a = !1, i = (
                          
        {}
      );
      Wr(() => {
        var o = n();
        zi(o), a && br(i, o) && (i = o, r.update(o));
      }), a = !0;
    }
    if (r?.destroy)
      return () => (
                               
        r.destroy()
      );
  });
}
function ca(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = ca(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function no() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = ca(e)) && (r && (r += " "), r += t);
  return r;
}
function ro(e) {
  return typeof e == "object" ? no(e) : e ?? "";
}
const er = [...` 	
\r\f \v\uFEFF`];
function ao(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var a of Object.keys(n))
      if (n[a])
        r = r ? r + " " + a : a;
      else if (r.length)
        for (var i = a.length, o = 0; (o = r.indexOf(a, o)) >= 0; ) {
          var s = o + i;
          (o === 0 || er.includes(r[o - 1])) && (s === r.length || er.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
        }
  }
  return r === "" ? null : r;
}
function io(e, t, n, r, a, i) {
  var o = (
                      
    e[cn]
  );
  if (j || o !== n || o === void 0) {
    var s = ao(n, r, i);
    (!j || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e[cn] = n;
  } else if (i && a !== i)
    for (var l in i) {
      var c = !!i[l];
      (a == null || c !== !!a[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function oo(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function lo(e, t) {
  var n = e.__defaultValue, r = e.multiple, a = r ? n ?? [] : null;
  if (!(r && !Ot(a))) {
    e.selectedIndex;
    for (var i of e.options) {
      var o = yn(i);
      oo(
        i,
        r ? (
                              
          a.includes(o)
        ) : Fr(o, n)
      );
    }
  }
}
function fa(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ot(t))
      return Va();
    for (var r of e.options)
      r.selected = t.includes(yn(r));
    return;
  }
  for (r of e.options) {
    var a = yn(r);
    if (Fr(a, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function so(e) {
  var t = new MutationObserver((n) => {
    n.every(co) || ("__defaultValue" in e && lo(e), "__value" in e && fa(e, e.__value));
  });
  t.observe(e, {
                                       
    childList: !0,
    subtree: !0,
                            
                                                       
                                                     
                                                              
    attributes: !0,
    attributeFilter: ["value"]
  }), Un(() => {
    t.disconnect();
  });
}
function yn(e) {
  return "__value" in e ? e.__value : e.value;
}
function co(e) {
  if (
                          
    e.target.closest("selectedcontent") !== null
  )
    return !0;
  if (e.type === "childList") {
    var t = [...e.addedNodes, ...e.removedNodes];
    return t.length > 0 && t.every((n) => n.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const fo =                 Symbol("is custom element"), uo =                 Symbol("is html"), ho = Da ? "link" : "LINK";
function $e(e, t, n, r) {
  var a = po(e);
  j && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ho) || a[t] !== (a[t] = n) && (t === "loading" && (e[ja] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && vo(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function po(e) {
  return (
                                                    
                      
    e[hr] ??= {
      [fo]: e.nodeName.includes("-"),
      [uo]: e.namespaceURI === Fa
    }
  );
}
var tr =                 new Map();
function vo(e) {
  var t = e.getAttribute("is") || e.nodeName, n = tr.get(t);
  if (n) return n;
  tr.set(t, n =                 new Set());
  for (var r, a = e, i = Element.prototype; i !== a; ) {
    r = cr(a);
    for (var o in r)
      r[o].set &&                                                                                     
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
    a = Tn(a);
  }
  return n;
}
function mo(e, t, n, r) {
  var a = (
                    
    r
  ), i = !0, o = () => (i && (i = !1, a =                 
  r), a);
  e[t];
  var s;
  s = () => {
    var p = (
                      
      e[t]
    );
    return p === void 0 ? o() : (i = !0, p);
  };
  var l = !1, c =                 Jt(() => (l = !1, s())), d = (
                         
    R
  );
  return (
                          
    (function(p, m) {
      if (arguments.length > 0) {
        const u = m ? T(c) : p;
        return ge(c, u), l = !0, a !== void 0 && (a = u), p;
      }
      return Re && l || (d.f & Z) !== 0 ? c.v : T(c);
    })
  );
}
function go(e, t) {
  if (yr(), j) {
    const n = window.__svelte?.h;
    if (n?.has(e))
      return (
                        
        n.get(e)
      );
    Ba();
  }
  return t();
}
function bo() {
  return C === null && ei(), (C.ac ??= new AbortController()).signal;
}
function Bn(e) {
  P === null && ct(), Si(() => {
    const t = ft(e);
    if (typeof t == "function") return (
                               
      t
    );
  });
}
function _o(e) {
  P === null && ct(), Bn(() => () => ft(e));
}
function yo(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function wo() {
  const e = P;
  return e === null && ct(), (t, n, r) => {
    const a = (
                                                          
      e.s.$$events?.[
                             
        t
      ]
    );
    if (a) {
      const i = Ot(a) ? a.slice() : [a], o = yo(
                             
        t,
        n,
        r
      );
      for (const s of i)
        s.call(e.x, o);
      return !o.defaultPrevented;
    }
    return !0;
  };
}
function Eo(e) {
  P === null && ct(), P.l === null && wr(), ua(P).b.push(e);
}
function Oo(e) {
  P === null && ct(), P.l === null && wr(), ua(P).a.push(e);
}
function ua(e) {
  var t = (
                                         
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const Ao =                 Object.freeze(                Object.defineProperty({
  __proto__: null,
  afterUpdate: Oo,
  beforeUpdate: Eo,
  createContext: si,
  createEventDispatcher: wo,
  createRawSnippet: eo,
  flushSync: yt,
  fork: yi,
  getAbortSignal: bo,
  getAllContexts: ci,
  getContext: Er,
  hasContext: Ar,
  hydratable: go,
  hydrate: Wi,
  mount: Mn,
  onDestroy: _o,
  onMount: Bn,
  setContext: Or,
  settled: Pi,
  tick: Di,
  unmount: bn,
  untrack: ft
}, Symbol.toStringTag, { value: "Module" })), Lo = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??=                 new Set()).add(Lo);
var ko =                 We("<option> </option>"), nr =                 We('<p role="status" class="svelte-1jhtfjo"> </p>'), So =                 We('<p role="alert" class="svelte-1jhtfjo"> </p>'), To =                 We('<div class="locale-preference svelte-1jhtfjo"><label for="hkiaLocale"> </label> <select id="hkiaLocale" aria-describedby="hkiaLocaleNotice" class="svelte-1jhtfjo"><option> </option><!></select> <p id="hkiaLocaleNotice" class="svelte-1jhtfjo"> </p> <!> <!> <!></div>');
function Co(e, t) {
  Yt(t, !0);
  const n =                 un(() => t.state.preference.mode === "manual" ? t.state.preference.locale : "auto");
  function r(_) {
    const y = _.currentTarget, O = y.value;
    y.value = T(n), O === "auto" ? t.onchoose({ mode: "auto" }) : t.entries.some((L) => L.id === O) && t.onchoose({ mode: "manual", locale: O });
  }
  var a = To(), i = Se(a), o = te(i, !0), s = ae(i, 2), l = Se(s), c = te(l, !0);
  l.value = l.__value = "auto";
  var d = ae(l);
  Ji(d, 17, () => t.entries, (_) => _.id, (_, y) => {
    var O = ko(), L = te(O, !0), k = {};
    ze(() => {
      $e(O, "lang", T(y).htmlLang), re(L, T(y).nativeName), k !== (k = T(y).id) && (O.value = (O.__value = k) ?? "");
    }), De(_, O);
  }), ke(s);
  var p;
  so(s);
  var m = ae(s, 2), u = te(m, !0), f = ae(m, 2);
  {
    var w = (_) => {
      var y = nr(), O = te(y, !0);
      ze(() => re(O, t.labels.loading)), De(_, y);
    };
    It(f, (_) => {
      t.state.status === "LOADING" && _(w);
    });
  }
  var E = ae(f, 2);
  {
    var v = (_) => {
      var y = So(), O = te(y, !0);
      ze(() => re(O, t.labels.error)), De(_, y);
    };
    It(E, (_) => {
      t.state.status === "ERROR" && _(v);
    });
  }
  var h = ae(E, 2);
  {
    var b = (_) => {
      var y = nr(), O = te(y, !0);
      ze(() => re(O, t.labels.storageUnavailable)), De(_, y);
    };
    It(h, (_) => {
      t.state.storage === "UNAVAILABLE" && _(b);
    });
  }
  ke(a), ze(() => {
    re(o, t.labels.label), s.disabled = t.state.status === "IDLE" || t.state.status === "CLOSED", $e(s, "aria-busy", t.state.status === "LOADING"), re(c, t.labels.auto), p !== (p = T(n)) && (s.value = (s.__value = p) ?? "", fa(s, p)), re(u, t.labels.unverified);
  }), Fi("change", s, r), De(e, a), Wt();
}
Mi(["change"]);
var Ro =                 We('<div><!> <div data-hkia-locale-scope="" class="svelte-r8qky4"><strong> </strong> <ul class="svelte-r8qky4"><li> </li><li> </li><li> </li></ul> <p class="svelte-r8qky4"><span> </span><span lang="ja">日本語名・英語名・GUIDで検索</span></p></div></div>');
function No(e, t) {
  Yt(t, !0);
  const n = ft(() => t.controller), r = n.consumer;
  let a =                 me(Qe(r.state));
  const i =                 un(() => T(a).active?.pack.verified.catalog), o =                 un(() => ({
    label: T(i)?.["locale.label"] ?? "Language",
    auto: T(i)?.["locale.auto"] ?? "Automatic (browser)",
    loading: T(i)?.["locale.loading"] ?? "Loading language data…",
    unverified: T(i)?.["locale.unverified"] ?? "Language availability in game settings is not verified.",
    error: T(i)?.["error.locale"] ?? "Language data could not be verified.",
    storageUnavailable: T(i)?.["locale.storageUnavailable"] ?? "Language preference could not be stored."
  }));
  Bn(() => {
    const L = r.subscribe((k) => ge(a, k, !0));
    return r.start("3.0.1"), () => {
      L(), n.close();
    };
  });
  function s(L) {
    r.choose(L);
  }
  var l = Ro(), c = Se(l);
  Co(c, {
    get entries() {
      return r.entries;
    },
    get state() {
      return T(a);
    },
    get labels() {
      return T(o);
    },
    onchoose: s
  });
  var d = ae(c, 2), p = Se(d), m = te(p, !0), u = ae(p, 2), f = Se(u), w = te(f, !0), E = ae(f), v = te(E), h = ae(E), b = te(h, !0);
  ke(u);
  var _ = ae(u, 2), y = Se(_), O = te(y);
  vr(), ke(_), ke(d), ke(l), ze(() => {
    $e(l, "data-hkia-locale-chrome", T(a).active?.locale ?? ""), $e(l, "data-locale-status", T(a).status), $e(l, "lang", T(a).active?.locale ?? "en"), $e(d, "lang", T(a).active?.locale ?? "en"), re(m, T(i)?.["state.previewOnly"] ?? "Preview only"), re(w, T(i)?.["nav.tabs"] ?? "Tabs"), re(v, `${T(i)?.["ach.filter.label"] ?? "Achievement filters" ?? ""} / ${T(i)?.["col.filter.label"] ?? "Collection filters" ?? ""}`), re(b, T(i)?.["ach.detail.heading"] ?? "Achievement details"), re(O, `${T(i)?.["ach.search.label"] ?? "Achievement search" ?? ""}:`);
  }), De(e, l), Wt();
}
function Io(e) {
  const { runtime: t, storage: n, registry: r } = e, a = r.map((h) => Object.freeze({ ...h })), i = Object.freeze(a.map((h) => h.id));
  if (!i.length || new Set(i).size !== i.length || a.some((h) => !h.id || !h.nativeName || !h.htmlLang || !["ltr", "rtl"].includes(h.direction))) throw new Error("INVALID_LOCALE_REGISTRY");
  let o = "AVAILABLE";
  const s = { getItem(h) {
    try {
      return n.getItem(h);
    } catch (b) {
      throw o = "UNAVAILABLE", b;
    }
  }, setItem(h, b) {
    try {
      n.setItem(h, b);
    } catch (_) {
      throw o = "UNAVAILABLE", _;
    }
  }, removeItem(h) {
    try {
      n.removeItem(h);
    } catch (b) {
      throw o = "UNAVAILABLE", b;
    }
  } };
  let l = t.readPreference(s);
  l.mode === "manual" && !i.includes(l.locale) && (l = { mode: "auto" });
  let c = Object.freeze({ status: "IDLE", preference: Object.freeze({ ...l }), version: null, active: null, storage: o, error: null }), d = 0;
  const p = t.createLocaleLoader(e.fetchVerified), m =                 new Set();
  function u(h) {
    return h === d && c.status !== "CLOSED";
  }
  function f(h) {
    const b = Object.freeze(h);
    c = b;
    for (const _ of m) {
      if (c !== b) break;
      _(b);
    }
  }
  function w(h) {
    return h.mode === "auto" || h.mode === "manual" && i.includes(h.locale);
  }
  function E(h, b) {
    let _;
    const y = (I, N) => {
      if (_) throw Error("MULTIPLE_PREFERENCE_WRITES");
      _ = { key: I, value: N };
    };
    try {
      t.writePreference({ getItem() {
        throw Error("UNEXPECTED_PREFERENCE_READ");
      }, setItem: y, removeItem: (I) => y(I, null) }, b);
    } catch {
      u(h) && (o = "UNAVAILABLE");
      return;
    }
    if (!u(h)) return;
    if (!_) {
      o = "UNAVAILABLE";
      return;
    }
    const { key: O, value: L } = _;
    let k;
    try {
      k = n.getItem(O);
    } catch {
      u(h) && (o = "UNAVAILABLE");
      return;
    }
    if (u(h)) {
      try {
        L === null ? n.removeItem(O) : n.setItem(O, L);
      } catch {
        u(h) && (o = "UNAVAILABLE");
      }
      if (!u(h))
        try {
          n.getItem(O) === L && k !== L && (k === null ? n.removeItem(O) : n.setItem(O, k));
        } catch {
          o = "UNAVAILABLE";
        }
    }
  }
  async function v(h, b, _ = !1) {
    if (c.status === "CLOSED") throw new Error("LOCALE_CONSUMER_CLOSED");
    if (!["3.0.0", "3.0.1"].includes(h) || !w(b)) throw new Error("INVALID_LOCALE_REQUEST");
    const y = Object.freeze({ ...b }), O = ++d;
    let L, k;
    try {
      const I = e.browser();
      if (!u(O) || (L = t.resolvePreference(y, I, i), !u(O))) return "STALE";
      const N = a.find((U) => U.id === L);
      if (!N) throw new Error("INVALID_RESOLVED_LOCALE");
      k = N;
    } catch (I) {
      if (!u(O)) return "STALE";
      throw I;
    }
    try {
      if (f({ ...c, status: "LOADING", version: h, active: c.active?.version === h ? c.active : null, error: null }), !u(O)) return "STALE";
      const I = await p.load(h, L);
      if (!u(O) || I.status === "STALE") return "STALE";
      if (I.pack.version !== h || I.pack.locale !== L)
        return f({ ...c, status: "ERROR", error: "PACK_MISMATCH" }), u(O) ? "ERROR" : "STALE";
      const N = c.active, U = () => {
        if (c.status === "CLOSED" || !N || c.active !== N) return;
        const G = a.find((g) => g.id === N.locale);
        if (G) try {
          e.documentLanguage(G.htmlLang, G.direction);
        } catch {
        }
      };
      try {
        e.documentLanguage(k.htmlLang, k.direction);
      } catch (G) {
        if (!u(O))
          return U(), "STALE";
        throw G;
      }
      return !u(O) || (_ && E(O, y), !u(O)) ? (U(), "STALE") : (f({ status: "READY", preference: y, version: h, active: Object.freeze({ version: h, locale: L, pack: I.pack }), storage: o, error: null }), u(O) ? "READY" : "STALE");
    } catch {
      return u(O) ? (f({ ...c, status: "ERROR", storage: o, error: "LOAD_FAILED" }), u(O) ? "ERROR" : "STALE") : "STALE";
    }
  }
  return Object.freeze({ get state() {
    return c;
  }, entries: Object.freeze(a), subscribe(h) {
    return m.add(h), h(c), () => m.delete(h);
  }, start(h) {
    return v(h, c.preference);
  }, choose(h) {
    if (c.version === null) throw new Error("LOCALE_VERSION_REQUIRED");
    return v(c.version, h, !0);
  }, refreshAuto() {
    if (c.version === null) throw new Error("LOCALE_VERSION_REQUIRED");
    return v(c.version, c.preference);
  }, close() {
    c.status !== "CLOSED" && (d++, p.invalidate(), f({ ...c, status: "CLOSED", active: null, version: null, error: null }), m.clear());
  } });
}
const wn = Object.freeze({ de: "bd5bb8948e5e15e886c4f58421b00b41f0ec68a8ec627b023776ac1525507edb", en: "af38facf8f7acbb982c9794909a1cc08edd5d94850795d69cd9ef23640e80c9f", "en-GB": "af38facf8f7acbb982c9794909a1cc08edd5d94850795d69cd9ef23640e80c9f", es: "fb3061db5c00ef1c32d24af6b49246e53924dd90bd7984993c4a0774d037950d", fr: "1504c6d257bfb77003fecdd7acbc5cf114a8e51050a7521ab4ca42eeb2fc9737", "fr-CA": "17360cc5e61429400bdf4fa703121a54a0aeaf2368902609bc2e0d7dfa166038", it: "252954237409005d1fee26f96f604619380001917dccd93b133ead52a6549619", ja: "5729953617fdda2c39fef0499dc922a55c6b4a0d0bf134fa1a656cb3deb74851", ko: "df8800988f3c50fcee9a73e5c60093da4ef2737bb62cd841466ecae2e41874c7", nl: "a9c9f522c04c61a85e63d030a2407028e122a4c9cff95d57d7b1df6e1c7ae948", "pt-BR": "9befdaa8b85d09f623f75ed980af465afa88e7a07a163ec7f87f9aaf90974c13", ru: "08c523b001893cb1c1b3a510ac68a1874c1194ef7a0690f2aad1cd8f1c2d57cd", tr: "9e0a2f2ee46bb9f5c8eae28842e4ea53cc1000146d375250b132e450ee5530b5", "zh-Hans": "9a5b1098e6cf9a9f19a0dea90a48bda78ecd0ef95ade4c4ca54e4082237b0139", "zh-Hant": "9638729fca88ca34e47006eef3889b8b2491ddc0a79cf6588f155ad2de0633cc" }), Mt = Object.freeze(["nav.achievements", "nav.collections", "nav.workspace", "nav.tabs", "r2.preview", "ach.intro", "ach.count", "ach.empty", "col.intro", "col.count", "ach.search.label", "ach.search.placeholder", "ach.filter.label", "ach.filter.all", "ach.filter.complete", "ach.filter.incomplete", "ach.filter.missing", "ach.filter.unknownSource", "ach.image.label", "ach.image.all", "ach.image.exact", "ach.image.sourceNull", "ach.image.unknown", "ach.sort.label", "ach.sort.source", "ach.sort.name", "ach.sort.progressDesc", "ach.sort.progressAsc", "ach.sort.completedFirst", "col.search.label", "col.search.placeholder", "col.filter.label", "col.filter.all", "col.filter.hasRecord", "col.filter.noRecord", "col.filter.unknown", "col.sort.label", "col.sort.source", "col.sort.name", "col.sort.recordDesc", "locale.label", "locale.auto", "locale.loading", "locale.unverified", "file.open", "file.status", "file.backup", "file.export", "edit.preview", "edit.apply", "edit.undo", "edit.redo", "edit.reset", "edit.complete", "edit.revoke", "edit.collect", "edit.uncollect", "edit.progress", "edit.date", "edit.collectionDate", "edit.batch", "edit.selected", "state.unknown", "state.unverified", "state.unsupported", "state.notRecorded", "state.absentRef", "state.missingText", "state.writerOff", "state.previewOnly", "warning.linkage", "warning.history", "warning.reward", "error.file", "error.version", "error.stale", "error.integrity", "error.locale", "privacy.local", "credits.notice", "col.grid.empty", "col.image.label", "col.image.unverified", "col.image.unknown", "col.image.status", "col.grid.recorded", "col.grid.parentReference", "col.grid.unmatched", "r3.detail.preview", "r4.ach.preview", "r4.ach.selection", "r4.ach.unselected", "ach.row.unknownName", "ach.row.externalImageUnknown", "r4.ach.limit", "ach.list.more", "ach.row.image.label", "ach.row.image.unverified", "ach.row.image.status", "ach.row.status.missing", "ach.row.aria", "ach.row.subtitle.missing", "ach.row.subtitle.document", "ach.list.unreadable", "ach.list.noMatch", "ach.list.unloaded", "col.item.search.placeholder", "col.item.search.label", "col.item.history.label", "col.item.sort.label", "col.item.sort.internal", "col.item.sort.id", "col.item.inspect", "col.item.empty", "col.item.guid", "col.item.history.presence", "col.item.history.rawTicks", "col.item.history.calendar", "col.item.history.unknownHint", "col.item.previewHint", "col.item.list.caption", "ach.detail.heading", "ach.detail.empty", "ach.detail.missingHint", "ach.detail.definitionMatch", "ach.detail.matched", "ach.detail.unknownValue", "ach.detail.unset", "ach.linkage.heading", "ach.linkage.requiredConfirmed", "ach.linkage.requiredCandidate", "ach.linkage.related", "ach.linkage.unknown", "ach.linkage.hint", "ach.facts.heading", "ach.facts.definitionHeading", "ach.facts.builtinHint", "ach.facts.groupHint", "ach.facts.dlcHint", "ach.facts.groupNameHint", "ach.facts.counterUnknown", "ach.facts.counterAbsent", "ach.facts.counterNull", "ach.facts.rewardUnknown", "ach.facts.rewardNone", "ach.facts.childMissing", "ach.facts.childIncomplete", "ach.facts.groupProgress", "col.item.image.label", "col.definition.image.label", "col.item.image.unverified", "col.item.image.status", "col.item.history.recorded", "col.item.history.absent", "col.item.history.status", "col.item.ticks", "col.item.calendarUnknown", "col.item.parent", "col.item.parentCross", "col.item.history.rawUnknown", "ach.detail.unknownDefinition", "ach.linkage.count", "ach.linkage.unverifiedCount", "ach.linkage.systemCount", "ach.facts.internalKey", "ach.facts.membersHeading", "ach.facts.membersLabel", "ach.facts.definitionUnknown", "ach.facts.groupUnknown", "ach.facts.counterName", "ach.facts.threshold", "ach.facts.builtin", "ach.facts.counterGuid", "ach.facts.counterSaved", "ach.facts.counterDocument", "ach.facts.onlyUniques", "ach.facts.countedGuids", "ach.facts.countedValues", "ach.facts.rewardDefinition", "ach.facts.rewardReceipt", "ach.facts.rewardValue", "ach.facts.rewardZero", "ach.facts.groupName", "ach.facts.referenceCount", "ach.facts.savedCompletion", "ach.facts.groupCounter", "ach.facts.groupGuid", "ach.facts.definitionGuid", "ach.facts.groupAbsent", "ach.detail.statusLabel", "locale.previewScope", "locale.storageUnavailable"]), jo = Mt.length;
async function da(e, t, n) {
  if (typeof t != "string" || !Object.hasOwn(wn, t) || !(e instanceof Uint8Array) || e.length === 0 || e.length > 65536) throw Error("EDITOR_CATALOG_CONTRACT");
  const r = Uint8Array.from(e), a = await n(r.slice());
  if (a !== wn[t]) throw Error("EDITOR_CATALOG_SHA");
  const i = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(r));
  if (!i || Object.getPrototypeOf(i) !== Object.prototype || Object.keys(i).length !== jo || !Mt.every((o) => Object.hasOwn(i, o) && typeof i[o] == "string" && i[o].trim())) throw Error("EDITOR_CATALOG_KEYS");
  return Object.freeze({ digest: a, catalog: Object.freeze(i) });
}
const rn = Object.freeze({ de: "af0e9e43f02c87f107cdb27ee63b1df64e6d1d1d1689ec62ead7dab84a04fb49", en: "c896e315b53afd3224664bdbef27e4beb3e1cd3e9b94d23262d8218e221bf66c", "en-GB": "f59c1ba446c9ec3ae94debdf6a68ff94fef975de3045d2056d61160bc8c9c34d", es: "6f096c8fe69ede9c3246038400e267d6759de68cc4411361247665d52beb671b", fr: "d5512e9d849830bff8437e89f5ea3732ac45601bafb801ec2572b66db4f6d1b6", "fr-CA": "ebc513f876b2bac625b4fe6e9917854a7c83f757c86a4aad218134423bb2e5e2", it: "123ef52319cbe8eac0e750a6a75a412c5f1d3f6daa920b5e741761a370db5fab", ja: "d455e9535b70644cce01a4a2abe387f3a5140657397fdb2b66f8567c5d9b8c2c", ko: "d877dd74ccc0c533912ffe63d646d51e456d22ebe3e00d6abd17f5983f11f4ba", nl: "39c69b6709be8e36d9eac82552b5d136ffc1fde147cdb220508e74cce2b57478", "pt-BR": "d5157fad02b6535552ee1ced049f3e9c45aa810fa6796af60e038f8cf55e98ab", ru: "55b15bb91abaa5f51243c8c661d593d3d3b8753d0f97152ddeaeb53298839e56", tr: "77d77b8d40d62ec3203adb1f5870f1af41ef2e9b1741dbbab0dec9a425181335", "zh-Hans": "cd8ccb9a9cda4247e102d5a6f788505c434f9fdb8c622ea4b82f24072a6a9418", "zh-Hant": "8a32cb00ad5fcc283bf822dd77c90d88db2321c865ffe644399dae3f77d9d08d" }), xo = Object.freeze(["nav.achievements", "nav.collections", "nav.workspace", "nav.tabs", "r2.preview", "ach.intro", "ach.count", "ach.empty", "col.intro", "col.count", "ach.search.label", "ach.search.placeholder", "ach.filter.label", "ach.filter.all", "ach.filter.complete", "ach.filter.incomplete", "ach.filter.missing", "ach.filter.unknownSource", "ach.image.label", "ach.image.all", "ach.image.exact", "ach.image.sourceNull", "ach.image.unknown", "ach.sort.label", "ach.sort.source", "ach.sort.name", "ach.sort.progressDesc", "ach.sort.progressAsc", "ach.sort.completedFirst", "col.search.label", "col.search.placeholder", "col.filter.label", "col.filter.all", "col.filter.hasRecord", "col.filter.noRecord", "col.filter.unknown", "col.sort.label", "col.sort.source", "col.sort.name", "col.sort.recordDesc", "locale.label", "locale.auto", "locale.loading", "locale.unverified", "file.open", "file.status", "file.backup", "file.export", "edit.preview", "edit.apply", "edit.undo", "edit.redo", "edit.reset", "edit.complete", "edit.revoke", "edit.collect", "edit.uncollect", "edit.progress", "edit.date", "edit.collectionDate", "edit.batch", "edit.selected", "state.unknown", "state.unverified", "state.unsupported", "state.notRecorded", "state.absentRef", "state.missingText", "state.writerOff", "state.previewOnly", "warning.linkage", "warning.history", "warning.reward", "error.file", "error.version", "error.stale", "error.integrity", "error.locale", "privacy.local", "credits.notice", "col.grid.empty", "col.image.label", "col.image.unverified", "col.image.unknown", "col.image.status", "col.grid.recorded", "col.grid.parentReference", "col.grid.unmatched", "r3.detail.preview", "r4.ach.preview", "r4.ach.selection", "r4.ach.unselected", "ach.row.unknownName", "ach.row.externalImageUnknown", "r4.ach.limit", "ach.list.more", "ach.row.image.label", "ach.row.image.unverified", "ach.row.image.status", "ach.row.status.missing", "ach.row.aria", "ach.row.subtitle.missing", "ach.row.subtitle.document", "ach.list.unreadable", "ach.list.noMatch", "ach.list.unloaded", "col.item.search.placeholder", "col.item.search.label", "col.item.history.label", "col.item.sort.label", "col.item.sort.internal", "col.item.sort.id", "col.item.inspect", "col.item.empty", "col.item.guid", "col.item.history.presence", "col.item.history.rawTicks", "col.item.history.calendar", "col.item.history.unknownHint", "col.item.previewHint", "col.item.list.caption", "ach.detail.heading", "ach.detail.empty", "ach.detail.missingHint", "ach.detail.definitionMatch", "ach.detail.matched", "ach.detail.unknownValue", "ach.detail.unset", "ach.linkage.heading", "ach.linkage.requiredConfirmed", "ach.linkage.requiredCandidate", "ach.linkage.related", "ach.linkage.unknown", "ach.linkage.hint", "ach.facts.heading", "ach.facts.definitionHeading", "ach.facts.builtinHint", "ach.facts.groupHint", "ach.facts.dlcHint", "ach.facts.groupNameHint", "ach.facts.counterUnknown", "ach.facts.counterAbsent", "ach.facts.counterNull", "ach.facts.rewardUnknown", "ach.facts.rewardNone", "ach.facts.childMissing", "ach.facts.childIncomplete", "ach.facts.groupProgress", "col.item.image.label", "col.definition.image.label", "col.item.image.unverified", "col.item.image.status", "col.item.history.recorded", "col.item.history.absent", "col.item.history.status", "col.item.ticks", "col.item.calendarUnknown", "col.item.parent", "col.item.parentCross", "col.item.history.rawUnknown", "ach.detail.unknownDefinition", "ach.linkage.count", "ach.linkage.unverifiedCount", "ach.linkage.systemCount", "ach.facts.internalKey", "ach.facts.membersHeading", "ach.facts.membersLabel", "ach.facts.definitionUnknown", "ach.facts.groupUnknown", "ach.facts.counterName", "ach.facts.threshold", "ach.facts.builtin", "ach.facts.counterGuid", "ach.facts.counterSaved", "ach.facts.counterDocument", "ach.facts.onlyUniques", "ach.facts.countedGuids", "ach.facts.countedValues", "ach.facts.rewardDefinition", "ach.facts.rewardReceipt", "ach.facts.rewardValue", "ach.facts.rewardZero", "ach.facts.groupName", "ach.facts.referenceCount", "ach.facts.savedCompletion", "ach.facts.groupCounter", "ach.facts.groupGuid", "ach.facts.definitionGuid", "ach.facts.groupAbsent", "ach.detail.statusLabel", "locale.previewScope", "locale.storageUnavailable", "file.title", "file.notLoaded", "file.drop", "file.choose", "file.chooseAria", "file.inputFormats", "file.exportAccount", "file.exportZip", "file.zipBusy", "file.dirty", "file.structuralReadOnly", "file.tooLarge", "file.unsupportedFormats", "file.loadFailedPriorInvalid", "file.loadFailedReason", "file.accountExportBlocked", "file.zipExportFailed", "native.sessionLabel", "native.open", "native.close", "native.download", "native.discard", "native.ready", "native.busy", "native.moduleUnavailable", "native.chooseZip", "native.exportReady", "native.exportBlocked", "native.closed", "native.exported", "native.exportFailed", "native.discarded", "native.stagedLabel", "native.notDownloaded", "native.previewLabel", "native.versionSlotLabel", "native.revisionLabel", "native.capabilitiesLabel", "native.applyExportLabel", "revision.checking", "revision.observed", "revision.unknown", "revision.inputDetail", "revision.snapshotNotice", "revision.fileChanged", "revision.unknownReason", "revision.comparisonScope", "revision.casMismatch", "revision.casUnknown", "revision.casLocalMatch", "revision.nativeOff", "file.loadedSummary", "file.slotCountUnknown", "file.headerSummary", "file.slotStructuralReadOnly", "file.slotKnownRead", "file.slotDomainSummary", "file.slotOpaqueWarning", "file.domainReadable", "file.domainUnknown"]), ha =                 new WeakSet();
async function Do(e, t, n) {
  if (typeof t != "string" || !Object.hasOwn(rn, t) || !(e instanceof Uint8Array) || !e.length || e.length > 65536 || typeof n != "function") throw Error("CATALOG252_CONTRACT");
  const r = Uint8Array.from(e);
  if (await n(r.slice()) !== rn[t]) throw Error("CATALOG252_SHA");
  const a = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(r));
  if (!a || Object.getPrototypeOf(a) !== Object.prototype || Object.keys(a).length !== 252 || !xo.every((o) => Object.hasOwn(a, o) && typeof a[o] == "string" && a[o].trim())) throw Error("CATALOG252_KEYS");
  const i = Object.freeze({ locale: t, catalog: Object.freeze(a), digest: rn[t] });
  return ha.add(i), i;
}
const Qt = (e) => ha.has(e);
async function Po(e, t, n, r) {
  if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || typeof r != "function" || e.length === 0 || t.length === 0 || e.length > 65536 || t.length > 65536) throw Error("FILE252_PAIR_CONTRACT");
  const a = Uint8Array.from(e), i = Uint8Array.from(t), [o, s] = await Promise.all([da(a, n, r), Do(i, n, r)]);
  if (!Qt(s) || s.locale !== n || Mt.length !== 192 || Object.keys(o.catalog).length !== 192 || Object.keys(s.catalog).length !== 252 || !Mt.every((l) => Object.hasOwn(s.catalog, l) && o.catalog[l] === s.catalog[l]))
    throw Error("FILE252_PAIR_INCOMPATIBLE");
  return Object.freeze({ locale: n, legacy: o, extended: s, readLegacyBytes: () => a.slice(), readExtendedBytes: () => i.slice() });
}
const pa = Object.freeze([{ id: "en", nativeName: "English", htmlLang: "en", direction: "ltr" }, { id: "en-GB", nativeName: "English (UK)", htmlLang: "en-GB", direction: "ltr" }, { id: "ja", nativeName: "日本語", htmlLang: "ja", direction: "ltr" }, { id: "de", nativeName: "Deutsch", htmlLang: "de", direction: "ltr" }, { id: "fr", nativeName: "Français", htmlLang: "fr", direction: "ltr" }, { id: "fr-CA", nativeName: "Français (Canada)", htmlLang: "fr-CA", direction: "ltr" }, { id: "es", nativeName: "Español", htmlLang: "es", direction: "ltr" }, { id: "it", nativeName: "Italiano", htmlLang: "it", direction: "ltr" }, { id: "nl", nativeName: "Nederlands", htmlLang: "nl", direction: "ltr" }, { id: "pt-BR", nativeName: "Português (Brasil)", htmlLang: "pt-BR", direction: "ltr" }, { id: "ru", nativeName: "Русский", htmlLang: "ru", direction: "ltr" }, { id: "tr", nativeName: "Türkçe", htmlLang: "tr", direction: "ltr" }, { id: "ko", nativeName: "한국어", htmlLang: "ko", direction: "ltr" }, { id: "zh-Hans", nativeName: "简体中文", htmlLang: "zh-Hans", direction: "ltr" }, { id: "zh-Hant", nativeName: "繁體中文", htmlLang: "zh-Hant", direction: "ltr" }].map(Object.freeze)), va = [
  ["achievementFilter", "ach.filter.label", "達成状況", [["all", "ach.filter.all", "すべて"], ["complete", "ach.filter.complete", "達成済み"], ["incomplete", "ach.filter.incomplete", "未達成"], ["missing", "ach.filter.missing", "定義のみ・未保存"], ["unknown-source", "ach.filter.unknownSource", "保存済み・定義UNKNOWN"]]],
  ["achievementImageFilter", "ach.image.label", "実績画像で絞り込み", [["all", "ach.image.all", "全画像状態"], ["exact", "ach.image.exact", "直接画像あり"], ["source-null", "ach.image.sourceNull", "直接画像 SOURCE_NULL"], ["unknown", "ach.image.unknown", "画像未照合"]]],
  ["achievementSort", "ach.sort.label", "実績の並び順", [["source", "ach.sort.source", "元の順番"], ["name", "ach.sort.name", "名称順"], ["progress-desc", "ach.sort.progressDesc", "進捗値の大きい順"], ["progress-asc", "ach.sort.progressAsc", "進捗値の小さい順"], ["completed-first", "ach.sort.completedFirst", "達成済みを先頭"]]],
  ["collectionStatusFilter", "col.filter.label", "コレクション収集履歴で絞り込み", [["all", "col.filter.all", "全カテゴリ"], ["has-record", "col.filter.hasRecord", "収集履歴あり"], ["no-record", "col.filter.noRecord", "収集履歴なし"], ["unknown", "col.filter.unknown", "未照合"]]],
  ["collectionSort", "col.sort.label", "コレクションの並び順", [["source", "col.sort.source", "定義順"], ["name", "col.sort.name", "名称順"], ["record-desc", "col.sort.recordDesc", "記録ID数の多い順"]]]
], X = (e) => {
  if (!e) throw Error("PRODUCT_LOCALE_CHROME_CONTRACT");
}, zo = [["#achTab > span", "text", "nav.achievements", "アチーブメント"], ["#colTab > span", "text", "nav.collections", "コレクション"], ['.primary-tabs[role="tablist"]', "aria-label", "nav.tabs", "表示する機能"], ["#achievementSearch", "aria-label", "ach.search.label", "実績を検索"], ["#collectionSearch", "aria-label", "col.search.label", "コレクションカテゴリを検索"], ["#collectionSearch", "placeholder", "col.search.placeholder", "コレクションカテゴリを検索"], ...va.flatMap(([e, t, n, r]) => [["#" + e, "aria-label", t, n], ...r.map(([a, i, o]) => ["#" + e + ' option[value="' + a + '"]', "text", i, o])])], Je = Object.freeze(zo.map((e) => Object.freeze(e))), Uo = ["locale.label", "locale.auto", "locale.loading", "locale.unverified", "error.locale", "locale.previewScope", "locale.storageUnavailable"], ma =                 new WeakSet();
async function Ho(e, t, n) {
  const { catalog: r } = await da(e, t, n);
  for (const i of [...Je.map((o) => o[2]), ...Uo]) X(Object.hasOwn(r, i) && typeof r[i] == "string" && r[i].trim() && !/[{}]/.test(r[i]));
  const a = Object.freeze({ locale: t, catalog: Object.freeze(r) });
  return ma.add(a), a;
}
const Ct = (e, t) => t === "text" ? e.textContent : e.getAttribute(t), En = (e) => (X(e.childNodes.length === 1 && e.childNodes[0].nodeType === 3 && e.childNodes[0].parentNode === e), e.childNodes[0]), rr = (e, t) => {
  const { n, p: r, textNode: a } = e;
  a ? (X(En(n) === a), a.data = t) : r === "text" ? n.textContent = t : t === null ? n.removeAttribute(r) : n.setAttribute(r, t);
}, an = (e, t) => e.length === t.length && e.every((n, r) => n === t[r]);
function Fo(e) {
  const t = (u) => {
    const f = e.querySelectorAll(u);
    return X(f.length === 1), f[0];
  }, n = () => {
    const u = t("#achTab"), f = t("#colTab"), w = t("#achPanel"), E = t("#colPanel"), v = t("#achievementSearch"), h = t("#collectionSearch");
    X(u.tagName === "BUTTON" && f.tagName === "BUTTON" && u.getAttribute("role") === "tab" && f.getAttribute("role") === "tab" && u.getAttribute("aria-controls") === "achPanel" && f.getAttribute("aria-controls") === "colPanel" && v.type === "search" && h.type === "search" && v.getAttribute("placeholder") === "日本語名・英語名・GUIDで検索");
    const b = va.map(([_, , , y]) => {
      const O = t("#" + _);
      return X(O.tagName === "SELECT" && an(Array.from(O.options, (L) => L.value), y.map((L) => L[0]))), O;
    });
    return [u, f, w, E, v, h, ...b];
  }, r = n(), a = Je.map(([u]) => t(u)), i = [...new Set(a)].map((u) => [u, u.getAttribute("lang")]), o = Je.map(([, u], f) => ({ n: a[f], p: u, original: Ct(a[f], u), parent: a[f].parentElement, textNode: u === "text" && a[f].tagName === "OPTION" ? En(a[f]) : null }));
  X(o.every((u, f) => u.original === Je[f][3]));
  for (const [u, f] of o.entries()) f.p === "text" && X(f.n.children.length === 0);
  o.push(...i.map(([u, f]) => ({ n: u, p: "lang", original: f, parent: u.parentElement })));
  let s = o.map((u) => u.original), l = null, c = !1;
  function d() {
    X(an(n(), r) && a.every((u, f) => t(Je[f][0]) === u) && o.every((u) => !u.textNode || En(u.n) === u.textNode));
  }
  function p() {
    const [u, f, w, E, v, h, ...b] = r;
    return [e.activeElement, u.getAttribute("aria-selected"), f.getAttribute("aria-selected"), u.tabIndex, f.tabIndex, u.className, f.className, w.hidden, E.hidden, ...[v, h].flatMap((_) => [_.value, _.selectionStart, _.selectionEnd, _.selectionDirection, _.disabled]), ...b.flatMap((_) => [_.value, _.selectedIndex, _.disabled, _.hidden])];
  }
  function m(u, f) {
    X(!c), c = !0;
    const w = [];
    try {
      d(), X(o.every((v, h) => Ct(v.n, v.p) === s[h]));
      const E = p();
      for (const [v, h] of o.entries()) s[v] !== u[v] && (w.push(v), rr(h, u[v]));
      return d(), X(an(p(), E) && o.every((v, h) => Ct(v.n, v.p) === u[h])), s = u, l = f, !0;
    } catch (E) {
      for (const v of w.reverse()) {
        const h = o[v];
        try {
          h.n.isConnected && h.n.parentElement === h.parent && Ct(h.n, h.p) === u[v] && rr(h, s[v]);
        } catch {
        }
      }
      throw E;
    } finally {
      c = !1;
    }
  }
  return Object.freeze({ get active() {
    return l;
  }, apply(u) {
    return X(ma.has(u) && pa.some((f) => f.id === u.locale)), m([...Je.map((f) => u.catalog[f[2]]), ...i.map(() => u.locale)], u.locale);
  }, reset() {
    return m(o.map((u) => u.original), null);
  } });
}
const ga = ["sourceLoadEpoch", "accountEditGeneration", "nativeOpenAttempt", "phase", "revision", "dirty", "name", "reason", "busy"], Mo = ["kind", "file", "discardConfirmed", "generation", "revision"], ba = (e, t) => e !== null && typeof e == "object" && !Array.isArray(e) && Object.keys(e).sort().join("|") === [...t].sort().join("|"), jt = (e) => typeof e == "number" && Number.isSafeInteger(e) && e >= 0, On = (e) => typeof e == "string" && e.length > 0;
function ar(e) {
  if (!ba(e, ga) || !jt(e.sourceLoadEpoch) || !jt(e.accountEditGeneration) || !jt(e.nativeOpenAttempt) || typeof e.busy != "boolean" || typeof e.dirty != "boolean" || !["empty", "loading", "error", "ready"].includes(e.phase)) throw Error("SHELL_SOURCE_WITNESS");
  if (e.phase === "ready") {
    if (typeof e.revision != "string" || !/^[0-9a-f]{64}$/.test(e.revision) || !On(e.name) || e.reason !== null) throw Error("SHELL_SOURCE_READY");
  } else if (e.revision !== null || e.name !== null || e.dirty || (e.phase === "error" ? !On(e.reason) : e.reason !== null)) throw Error("SHELL_SOURCE_UNREADY");
  return Object.freeze({ ...e });
}
function _a(e, t) {
  return ga.every((n) => e[n] === t[n]);
}
function Bo(e, t, n, r) {
  return !ba(e, Mo) || !_a(n, r) || r.busy || r.phase === "loading" || e.generation !== t.generation || e.revision !== t.revision || e.discardConfirmed !== r.dirty ? !1 : e.kind === "open" ? typeof File < "u" && e.file instanceof File && On(e.file.name) && jt(e.file.size) : e.kind === "close" && e.file === null && r.phase === "ready";
}
function Vo(e, t) {
  let n = null, r = -1, a = !1, i = !1, o = !1;
  function s(c = !1) {
    if (a || o) throw Error("SHELL_PUBLICATION_CLOSED_OR_REENTRANT");
    const d = ar(e.read());
    if (!c && n && _a(n.witness, d)) return n.snapshot;
    if (r >= Number.MAX_SAFE_INTEGER) throw Error("SHELL_PUBLICATION_EXHAUSTED");
    const p = Object.freeze({ generation: ++r, phase: d.phase, revision: d.revision, dirty: d.dirty, name: d.name, reason: d.reason });
    o = !0;
    try {
      t(p), n = Object.freeze({ witness: d, snapshot: p });
    } catch (m) {
      throw n = null, a = !0, m;
    } finally {
      o = !1;
    }
    return p;
  }
  async function l(c) {
    if (a || o || i) return !1;
    const d = n;
    if (!d || !Bo(c, d.snapshot, d.witness, ar(e.read())))
      return s(!0), !1;
    i = !0;
    try {
      return await e.execute(c, d.witness) === !0;
    } finally {
      i = !1, a || s(!0);
    }
  }
  return Object.freeze({ refresh: s, dispatch: l, read: () => n?.snapshot ?? null, close() {
    a = !0, n = null;
  } });
}
const bt = Object.freeze(["title", "local", "open", "drop", "formats", "help", "loading", "error", "retry", "workspace", "change", "close", "dirtyTitle", "dirtyBody", "cancel", "discard", "rights", "busy", "details"]), Go = Object.freeze({ title: "HKIA セーブエディター", local: "端末内で処理", open: "セーブを開く", drop: "ここにファイルをドロップ", formats: "対応ファイル", help: "Switch v3.0.0 / v3.0.1：バックアップ ZIP、save_0.save、SettingsAccount/settings.json", loading: "読み込み中…", error: "読み込めませんでした", retry: "別のファイルを選択", workspace: "編集画面", change: "ファイルを変更", close: "閉じる", dirtyTitle: "未出力の変更があります", dirtyBody: "変更を破棄して続けますか？", cancel: "キャンセル", discard: "変更を破棄して続ける", rights: "非公式ツール。ゲームの画像・名称は各権利者に帰属します。", busy: "処理中…", details: "詳細" }), ue = (e) => {
  if (!e) throw Error("SAVE_FIRST_SHELL_CONTRACT");
}, ya = (e) => Number.isSafeInteger(e) && e >= 0, wa = (e, t) => e && typeof e == "object" && !Array.isArray(e) && Object.keys(e).sort().join("|") === t.slice().sort().join("|");
function Ea(e) {
  return ue(wa(e, ["generation", "phase", "revision", "dirty", "name", "reason"]) && ya(e.generation) && ["empty", "loading", "error", "ready"].includes(e.phase) && typeof e.dirty == "boolean"), e.phase === "ready" ? ue(typeof e.revision == "string" && e.revision.length > 0 && typeof e.name == "string" && e.name.length > 0 && e.reason === null) : ue(e.revision === null && e.dirty === !1 && e.name === null && (e.phase === "error" ? typeof e.reason == "string" && e.reason.length > 0 : e.reason === null)), Object.freeze({ ...e });
}
function An(e) {
  return ue(wa(e, bt) && bt.every((t) => typeof e[t] == "string" && e[t].trim().length > 0)), Object.freeze({ ...e });
}
const Ko = (e, t) => e && Object.keys(t).every((n) => e[n] === t[n]);
function qo(e, t = () => {
}) {
  ue(typeof e == "function" && typeof t == "function");
  let n = null, r = null, a = !1, i = !1;
  function o() {
    return Object.freeze({ snapshot: n, pending: r?.kind ?? null, busy: a, ready: n?.phase === "ready" });
  }
  function s() {
    t(o());
  }
  function l(p) {
    return ue(!i), p = Ea(p), n && (ue(p.generation >= n.generation), p.generation === n.generation) ? (ue(Ko(n, p)), o()) : (n = p, r = null, a = !1, s(), o());
  }
  function c(p, m, u = !1) {
    const f = n;
    if (a = !0, r = null, s(), n !== f) return !1;
    try {
      e(Object.freeze({ kind: p, file: m, discardConfirmed: u, generation: f.generation, revision: f.revision }));
    } catch (w) {
      throw n === f && (a = !1, s()), w;
    }
    return !0;
  }
  function d(p, m) {
    return i || !n || a || r || n.phase === "loading" || p === "close" && n.phase !== "ready" ? !1 : (p === "open" && ue(m && typeof m.name == "string" && m.name.length > 0 && ya(m.size)), n.phase === "ready" && n.dirty ? (r = { kind: p, file: m, generation: n.generation, revision: n.revision }, s(), !0) : c(p, m));
  }
  return Object.freeze({ update: l, view: o, open: (p) => d("open", p), close: () => d("close", null), cancel() {
    return i || !r ? !1 : (r = null, s(), !0);
  }, confirm() {
    return i || !r || a || n.phase !== "ready" || r.generation !== n.generation || r.revision !== n.revision ? !1 : c(r.kind, r.file, !0);
  }, dispose() {
    i = !0, r = null, n = null, a = !1;
  } });
}
const Yo = '<div class="hk-shell"><header class="hk-shell-header"><div class="hk-shell-brand"><span aria-hidden="true" class="hk-shell-star">✦</span><h1 data-label="title"></h1></div><span class="hk-shell-local" data-label="local"></span></header><div class="hk-shell-main"><section class="hk-shell-landing" data-shell="landing" aria-labelledby="hk-shell-title"><div class="hk-shell-drop" data-shell="drop"><span class="hk-shell-folder" aria-hidden="true">⇧</span><h2 id="hk-shell-title" data-label="open"></h2><p data-label="drop"></p><button type="button" class="hk-shell-primary" data-shell="pick" data-label="open"></button><input data-shell="input" type="file" accept=".zip,.save,.json,.bak,.lbak,application/json,application/zip" hidden tabindex="-1"><details><summary data-label="formats"></summary><p data-label="help"></p></details></div></section><section class="hk-shell-message" data-shell="message" hidden aria-live="polite" role="status"><h2 data-shell="message-title" tabindex="-1"></h2><details data-shell="diagnostics" hidden><summary data-label="details"></summary><p data-shell="reason"></p></details><button type="button" data-shell="retry" data-label="retry" hidden></button></section><section class="hk-shell-toolbar" data-shell="toolbar" hidden><div><h2 data-shell="heading" tabindex="-1" data-label="workspace"></h2><p data-shell="filename"></p></div><div class="hk-shell-actions"><button type="button" data-shell="change" data-label="change"></button><button type="button" data-shell="close" data-label="close"></button></div></section><section class="hk-shell-confirm" data-shell="confirm" hidden role="group" aria-labelledby="hk-shell-dirty"><h2 id="hk-shell-dirty" data-label="dirtyTitle"></h2><p data-label="dirtyBody"></p><div class="hk-shell-actions"><button type="button" data-shell="cancel" data-label="cancel"></button><button type="button" data-shell="discard" data-label="discard"></button></div></section><p data-shell="busy" role="status" aria-live="polite" tabindex="-1" data-label="busy" hidden></p></div><footer data-label="rights"></footer></div>';
function Wo(e, t) {
  ue(e && e.childNodes.length === 0 && !e.ownerDocument.querySelector(".hk-shell")), e.innerHTML = Yo;
  const n = (f) => e.querySelector(`[data-shell="${f}"]`);
  let r, a = null, i = null, o = !0;
  const s = [], l = (f, w, E) => {
    f.addEventListener(w, E), s.push(() => f.removeEventListener(w, E));
  }, c = qo((f) => t.dispatch(f), p);
  function d(f) {
    f && f.isConnected && !f.hidden && f.focus();
  }
  function p(f) {
    if (!o) return;
    const w = f.snapshot, E = f.ready, v = !!f.pending, h = w.phase === "loading", b = w.phase === "error";
    v && !a?.pending && (i = e.ownerDocument.activeElement), n("landing").hidden = E || h || b, n("message").hidden = !h && !b, n("message").setAttribute("role", b ? "alert" : "status"), n("message").setAttribute("aria-live", b ? "assertive" : "polite"), n("toolbar").hidden = !E, n("confirm").hidden = !v, n("busy").hidden = !f.busy, n("message-title").textContent = h ? r.loading : r.error, n("reason").textContent = b ? w.reason : "", n("diagnostics").hidden = !b, b || (n("diagnostics").open = !1), n("retry").hidden = !b, n("filename").textContent = E ? w.name : "";
    for (const _ of ["pick", "retry", "change", "close"]) n(_).disabled = f.busy || v;
    n("input").disabled = f.busy || v || h, t.workspace(E), v && !a?.pending ? d(n("cancel")) : !v && a?.pending && E && !f.busy ? (d(i), i = null) : f.busy && !a?.busy ? d(n("busy")) : w.phase !== a?.snapshot?.phase && d(n(E ? "heading" : b || h ? "message-title" : "pick")), a = f;
  }
  function m(f) {
    ue(o && typeof f.dispatch == "function" && typeof f.workspace == "function");
    const w = An(f.labels), E = t;
    t = f;
    try {
      const v = c.update(f.snapshot);
      r = w;
      for (const h of e.querySelectorAll("[data-label]")) h.textContent = r[h.dataset.label];
      n("input").setAttribute("aria-label", r.open), p(v);
    } catch (v) {
      throw t = E, v;
    }
  }
  r = An(t.labels);
  for (const f of e.querySelectorAll("[data-label]")) f.textContent = r[f.dataset.label];
  n("input").setAttribute("aria-label", r.open);
  const u = () => n("input").click();
  for (const f of ["pick", "retry", "change"]) l(n(f), "click", u);
  return l(n("input"), "change", () => {
    const f = n("input").files?.[0];
    f && c.open(f), n("input").value = "";
  }), l(n("drop"), "dragover", (f) => {
    f.preventDefault();
  }), l(n("drop"), "drop", (f) => {
    f.preventDefault(), f.dataTransfer?.files?.length === 1 && c.open(f.dataTransfer.files[0]);
  }), l(n("close"), "click", () => c.close()), l(n("cancel"), "click", () => c.cancel()), l(n("discard"), "click", () => c.confirm()), l(n("confirm"), "keydown", (f) => {
    f.key === "Escape" && (f.preventDefault(), c.cancel());
  }), c.update(t.snapshot), { update: m, destroy() {
    o = !1, c.dispose();
    for (const f of s) f();
    e.replaceChildren();
  } };
}
const on = Object.freeze({ local: "privacy.local", open: "file.open", drop: "file.drop", error: "error.file", busy: "native.busy", title: "shell.title", formats: "shell.formats", help: "shell.help", loading: "shell.loading", retry: "shell.retry", workspace: "shell.workspace", change: "shell.change", close: "shell.close", dirtyTitle: "shell.dirtyTitle", dirtyBody: "shell.dirtyBody", cancel: "shell.cancel", discard: "shell.discard", rights: "shell.rights", details: "shell.details" }), ir = Object.freeze({ de: "c588364f38d8692f2a79c8538f8c6ffe9a23a46f9543e7c0e1fe1a7aef742388", en: "2237be1bcb027686f1ff31c2e2e0bae7834bdeb7107ac6ec3e0bb27d2942be14", "en-GB": "dd0b9707e270859968264822de025746233d8d7092126446767741e6eaab3a5e", es: "0fc1b89756542a6c443157f7680257f628e56ae6c833c79fc3fc0602302983d8", fr: "4002b78882b106fbc2b61b6c28f55b322a8c8b7861233dea4dc05bcf3302f88e", "fr-CA": "9f276532aea84e745a4cee9c996be18044f9a2a11b5f8db42961eb2ada22c510", it: "d7040571f3f71b9e24f7512baa5d9fbc80a904908524e6b0817126564e95fc15", ja: "d6e412ef9a556dccb5e0a3f75048f94bc67906e2d7793cac7f2138fb9adb9f95", ko: "85d72e75ad4e379fbc25ff770bb8248dd46845c2f6f9e51db0b458eb8283cdea", nl: "693d695cd0b778444af9b2d7dc66358f7c43d40acba91c5c569921b0d08a7a0f", "pt-BR": "fee4894a2d1aa70539ef917ff52b332c19b8d552d551cd661bb8f1d67fcec70a", ru: "4a8c42c608444c152a4a0962f4c8328b65110a3ddba19dfee50789a683faf74d", tr: "0700f03fc6af8a486fb8f5e1dae1386dd55b1f9e86f3d05e6af16f6b2b0ba153", "zh-Hans": "7b19814d386187fb9752807da6d98da586894796025a8e003e993461332bc012", "zh-Hant": "87c59d3dcc9abd810cc1b760fb96095e37052396c6f5117f8b0b94050f5510df" }), or = Object.freeze(["ach.count", "ach.detail.definitionMatch", "ach.detail.empty", "ach.detail.heading", "ach.detail.matched", "ach.detail.missingHint", "ach.detail.statusLabel", "ach.detail.unknownDefinition", "ach.detail.unknownValue", "ach.detail.unset", "ach.empty", "ach.facts.builtin", "ach.facts.builtinHint", "ach.facts.childIncomplete", "ach.facts.childMissing", "ach.facts.countedGuids", "ach.facts.countedValues", "ach.facts.counterAbsent", "ach.facts.counterDocument", "ach.facts.counterGuid", "ach.facts.counterName", "ach.facts.counterNull", "ach.facts.counterSaved", "ach.facts.counterUnknown", "ach.facts.definitionGuid", "ach.facts.definitionHeading", "ach.facts.definitionUnknown", "ach.facts.dlcHint", "ach.facts.groupAbsent", "ach.facts.groupCounter", "ach.facts.groupGuid", "ach.facts.groupHint", "ach.facts.groupName", "ach.facts.groupNameHint", "ach.facts.groupProgress", "ach.facts.groupUnknown", "ach.facts.heading", "ach.facts.internalKey", "ach.facts.membersHeading", "ach.facts.membersLabel", "ach.facts.onlyUniques", "ach.facts.referenceCount", "ach.facts.rewardDefinition", "ach.facts.rewardNone", "ach.facts.rewardReceipt", "ach.facts.rewardUnknown", "ach.facts.rewardValue", "ach.facts.rewardZero", "ach.facts.savedCompletion", "ach.facts.threshold", "ach.filter.all", "ach.filter.complete", "ach.filter.incomplete", "ach.filter.label", "ach.filter.missing", "ach.filter.unknownSource", "ach.image.all", "ach.image.exact", "ach.image.label", "ach.image.sourceNull", "ach.image.unknown", "ach.intro", "ach.linkage.count", "ach.linkage.heading", "ach.linkage.hint", "ach.linkage.related", "ach.linkage.requiredCandidate", "ach.linkage.requiredConfirmed", "ach.linkage.systemCount", "ach.linkage.unknown", "ach.linkage.unverifiedCount", "ach.list.more", "ach.list.noMatch", "ach.list.unloaded", "ach.list.unreadable", "ach.row.aria", "ach.row.externalImageUnknown", "ach.row.image.label", "ach.row.image.status", "ach.row.image.unverified", "ach.row.status.missing", "ach.row.subtitle.document", "ach.row.subtitle.missing", "ach.row.unknownName", "ach.search.label", "ach.search.placeholder", "ach.sort.completedFirst", "ach.sort.label", "ach.sort.name", "ach.sort.progressAsc", "ach.sort.progressDesc", "ach.sort.source", "col.count", "col.definition.image.label", "col.filter.all", "col.filter.hasRecord", "col.filter.label", "col.filter.noRecord", "col.filter.unknown", "col.grid.empty", "col.grid.parentReference", "col.grid.recorded", "col.grid.unmatched", "col.image.label", "col.image.status", "col.image.unknown", "col.image.unverified", "col.intro", "col.item.calendarUnknown", "col.item.empty", "col.item.guid", "col.item.history.absent", "col.item.history.calendar", "col.item.history.label", "col.item.history.presence", "col.item.history.rawTicks", "col.item.history.rawUnknown", "col.item.history.recorded", "col.item.history.status", "col.item.history.unknownHint", "col.item.image.label", "col.item.image.status", "col.item.image.unverified", "col.item.inspect", "col.item.list.caption", "col.item.parent", "col.item.parentCross", "col.item.previewHint", "col.item.search.label", "col.item.search.placeholder", "col.item.sort.id", "col.item.sort.internal", "col.item.sort.label", "col.item.ticks", "col.search.label", "col.search.placeholder", "col.sort.label", "col.sort.name", "col.sort.recordDesc", "col.sort.source", "credits.notice", "edit.apply", "edit.batch", "edit.collect", "edit.collectionDate", "edit.complete", "edit.date", "edit.preview", "edit.progress", "edit.redo", "edit.reset", "edit.revoke", "edit.selected", "edit.uncollect", "edit.undo", "error.file", "error.integrity", "error.locale", "error.stale", "error.version", "file.accountExportBlocked", "file.backup", "file.choose", "file.chooseAria", "file.dirty", "file.domainReadable", "file.domainUnknown", "file.drop", "file.export", "file.exportAccount", "file.exportZip", "file.headerSummary", "file.inputFormats", "file.loadFailedPriorInvalid", "file.loadFailedReason", "file.loadedSummary", "file.notLoaded", "file.open", "file.slotCountUnknown", "file.slotDomainSummary", "file.slotKnownRead", "file.slotOpaqueWarning", "file.slotStructuralReadOnly", "file.status", "file.structuralReadOnly", "file.title", "file.tooLarge", "file.unsupportedFormats", "file.zipBusy", "file.zipExportFailed", "locale.auto", "locale.label", "locale.loading", "locale.previewScope", "locale.storageUnavailable", "locale.unverified", "native.applyExportLabel", "native.busy", "native.capabilitiesLabel", "native.chooseZip", "native.close", "native.closed", "native.discard", "native.discarded", "native.download", "native.exportBlocked", "native.exportFailed", "native.exportReady", "native.exported", "native.moduleUnavailable", "native.notDownloaded", "native.open", "native.previewLabel", "native.ready", "native.revisionLabel", "native.sessionLabel", "native.stagedLabel", "native.versionSlotLabel", "nav.achievements", "nav.collections", "nav.tabs", "nav.workspace", "privacy.local", "r2.preview", "r3.detail.preview", "r4.ach.limit", "r4.ach.preview", "r4.ach.selection", "r4.ach.unselected", "revision.casLocalMatch", "revision.casMismatch", "revision.casUnknown", "revision.checking", "revision.comparisonScope", "revision.fileChanged", "revision.inputDetail", "revision.nativeOff", "revision.observed", "revision.snapshotNotice", "revision.unknown", "revision.unknownReason", "shell.cancel", "shell.change", "shell.close", "shell.details", "shell.dirtyBody", "shell.dirtyTitle", "shell.discard", "shell.formats", "shell.help", "shell.loading", "shell.retry", "shell.rights", "shell.title", "shell.workspace", "state.absentRef", "state.missingText", "state.notRecorded", "state.previewOnly", "state.unknown", "state.unsupported", "state.unverified", "state.writerOff", "warning.history", "warning.linkage", "warning.reward"]), Oa =                 new WeakSet(), fe = (e) => {
  if (!e) throw Error("SHELL_LOCALE_266_CONTRACT");
}, Aa = (e, t) => e && typeof e == "object" && !Array.isArray(e) && Object.keys(e).sort().join("|") === [...t].sort().join("|"), Zo = async (e) => Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", e)), (t) => t.toString(16).padStart(2, "0")).join("");
async function Jo(e, t) {
  fe(typeof t == "string" && Object.hasOwn(ir, t) && e instanceof Uint8Array && e.length > 0 && e.length <= 65536);
  const n = Uint8Array.from(e), r = await Zo(n);
  fe(r === ir[t]);
  const a = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(n));
  fe(Aa(a, or) && or.every((s) => typeof a[s] == "string" && a[s].trim())), fe(bt.every((s) => Object.hasOwn(on, s)) && Object.keys(on).length === bt.length);
  const i = An(Object.fromEntries(bt.map((s) => {
    const l = a[on[s]];
    return fe(typeof l == "string" && l.trim() && !/[{}]/.test(l)), [s, l];
  })));
  for (const s of ["Switch", "v3.0.0", "v3.0.1", "ZIP", "save_0.save", "SettingsAccount/settings.json"]) fe(i.help.includes(s));
  const o = Object.freeze({ locale: t, sha256: r, labels: i, credits: a["credits.notice"] });
  return Oa.add(o), o;
}
function Xo(e) {
  return e === null ? Object.freeze({ epoch: null, catalog: null, labels: Go }) : (fe(Aa(e, ["epoch", "catalog"]) && Number.isSafeInteger(e.epoch) && e.epoch >= 0 && Oa.has(e.catalog)), Object.freeze({ epoch: e.epoch, catalog: e.catalog, labels: e.catalog.labels }));
}
function Qo() {
  let e = null, t = null, n = !1, r = null;
  return Object.freeze({ apply(a, i) {
    if (n || typeof i != "function") return "REJECTED";
    n = !0;
    try {
      let o;
      try {
        o = Xo(a), o.epoch !== null && e !== null && fe(o.epoch > e || o.epoch === e && o.catalog === t);
      } catch {
        return "REJECTED";
      }
      return i(o.labels) === !1 ? "REJECTED" : (o.epoch !== null ? (e = o.epoch, t = o.catalog) : e !== null && (t = null), r = o, "APPLIED");
    } finally {
      n = !1;
    }
  }, read: () => r });
}
function $o(e, t) {
  const n = Qo();
  let r = null, a = !1, i = null;
  function o(s) {
    if (a) return "REJECTED";
    let l;
    try {
      l = Ea(s.snapshot), fe(typeof s.dispatch == "function" && typeof s.workspace == "function"), i && fe(l.generation > i.generation || l.generation === i.generation && Object.keys(i).every((c) => l[c] === i[c]));
    } catch {
      return "REJECTED";
    }
    return n.apply(s.locale, (c) => {
      const d = { snapshot: l, labels: c, dispatch: s.dispatch, workspace: s.workspace };
      return r ? r.update(d) : r = Wo(e, d), i = l, !0;
    });
  }
  return fe(o(t) === "APPLIED"), { update: o, read: n.read, destroy() {
    a || (a = !0, r.destroy());
  } };
}
function el(e, t) {
  const { host: n, workspace: r, localeHost: a, credits: i } = e;
  if ((                new Set([n, r, a, i])).size !== 4 || [n, r, a, i].some((f) => f.ownerDocument !== t || !f.isConnected) || n !== t.getElementById("hkiaSaveFirstHost") || r !== t.getElementById("hkiaProductWorkspace") || a !== t.getElementById("hkiaLocaleChrome") || i !== t.getElementById("attributionNotice") || r.contains(n) || r.contains(a) || r.contains(i) || n.childNodes.length !== 0 || t.querySelector(".hk-shell")) throw Error("SHELL_PRODUCT_HOST");
  r.hidden = !0, r.inert = !0;
  let o = !1, s = null, l = null, c = null, d = null;
  const p = Vo(e, (f) => {
    if (d && d(f, s) !== "APPLIED") throw Error("SHELL_PRODUCT_PAINT");
  });
  function m(f) {
    o || (o = !0, p.close(), l?.(), l = null, d = null, r.hidden = !0, r.inert = !0, c?.(), c = null, f && e.onError(f));
  }
  const u = (async () => {
    try {
      const [{ mount: f, unmount: w, flushSync: E }, { default: v }] = await Promise.all([Promise.resolve().then(() => Ao), Promise.resolve().then(() => fl)]);
      if (o) return !1;
      const h = p.refresh(), b = f(v, { target: n, props: { snapshot: h, locale: s, dispatch: (_) => {
        p.dispatch(_).catch(() => m("SHELL_SOURCE_DISPATCH"));
      }, externalWorkspace: r } });
      if (c = () => {
        w(b).catch(() => {
        });
      }, E(), d = (_, y) => {
        const O = b.project(_, y);
        return E(), O;
      }, d(h, s) !== "APPLIED") throw Error("SHELL_PRODUCT_MOUNT");
      return l = e.connect(() => {
        try {
          p.refresh();
        } catch {
          m("SHELL_SOURCE_REFRESH");
        }
      }), p.refresh(), !0;
    } catch {
      return m("SHELL_PRODUCT_UNAVAILABLE"), !1;
    }
  })();
  return Object.freeze({ ready: u, paintLocale(f) {
    if (o || !d) return "BLOCKED";
    const w = p.read();
    if (!w) return "BLOCKED";
    try {
      const E = d(w, f);
      return E === "APPLIED" && (s = f), E;
    } catch {
      return m("SHELL_LOCALE_PAINT"), "BLOCKED";
    }
  }, close() {
    m();
  } });
}
function tl(e) {
  if (!!e.file252 != !!e.loadExtended) throw Error("ROOT_FILE252_PAIR_REQUIRED");
  if (!!e.shell != !!e.loadShell266 || e.shell && !e.file252) throw Error("ROOT_SHELL266_PAIR_REQUIRED");
  const t = Fo(e.doc), n = e.header.createProductAchievementHeaderR8(e.doc), r = e.shell ? el(e.shell, e.doc) : null, a =                 new Map();
  let i = 0, o = null, s = null, l = !1, c = !1, d = null, p = null;
  const m = () => p !== null && p.panel === e.doc.getElementById("editorPanel") && p.readSelected() === p.selected && (p.record === null || p.record.guid === p.selected);
  function u(h) {
    const b = p;
    return !b || !m() ? !1 : n.render(b.panel, () => {
      if (p !== b || !m()) throw Error("ROOT_HEADER_STALE");
      return { record: b.record, locale: h };
    }) === "APPLIED";
  }
  function f(h) {
    if (i >= Number.MAX_SAFE_INTEGER) throw Error("ROOT_LOCALE_EPOCH_EXHAUSTED");
    return Object.freeze({ epoch: ++i, catalog: h });
  }
  function w(h) {
    if (l || c) throw Error("ROOT_LOCALE_BLOCKED");
    if (h === o) return;
    const b = o, _ = s, y = h ? f(h.header) : null, O = e.file252 ? (y ?? f(null)).epoch : null;
    c = !0;
    let L = !1, k = !1, I = !1, N = !1, U = !1;
    try {
      h ? t.apply(h.verified) : t.reset();
      const G = h && y ? Object.freeze({ epoch: y.epoch, catalog: h.category }) : null;
      if (e.category.paintLocale(G) !== "APPLIED") throw Error("ROOT_CATEGORY_RETAINED");
      L = !0;
      const g = h && y ? Object.freeze({ epoch: y.epoch, catalog: h.items }) : null;
      if (e.items.paintLocale(g) !== "APPLIED") throw Error("ROOT_ITEMS_RETAINED");
      k = !0;
      const A = h && y ? Object.freeze({ epoch: y.epoch, catalog: h.achievementList }) : null;
      if (e.achievementList.paintLocale(A) !== "APPLIED") throw Error("ROOT_ACHIEVEMENT_LIST_RETAINED");
      if (I = !0, e.file252) {
        if (O === null || h && !h.file252) throw Error("ROOT_FILE252_UNVERIFIED");
        const x = e.file252.paintLocale(Object.freeze({ epoch: O, catalog: h?.file252 ?? null }));
        if (x === "BLOCKED" && (l = !0), x !== "APPLIED") throw Error("ROOT_FILE252_RETAINED");
        N = !0;
      }
      if (r) {
        if (h && (!y || !h.shell266)) throw Error("ROOT_SHELL266_UNVERIFIED");
        const x = r.paintLocale(h && y && h.shell266 ? Object.freeze({ epoch: y.epoch, catalog: h.shell266 }) : null);
        if (x === "BLOCKED" && (l = !0), x !== "APPLIED") throw Error("ROOT_SHELL266_RETAINED");
        U = !0;
      }
      if (!u(y)) throw Error("ROOT_HEADER_RETAINED");
      o = h, s = y, d = h && y ? Object.freeze({ epoch: y.epoch, locale: h.locale, sha256: wn[h.locale], catalog: h.verified.catalog }) : null;
    } catch (G) {
      let g = null;
      if (b && (L || k || I) || N || U)
        try {
          g = f(b?.header ?? null);
        } catch {
          l = !0;
        }
      if (U)
        try {
          if (!r || !g) throw Error("ROOT_SHELL266_ROLLBACK_EPOCH");
          const A = b && b.shell266 ? Object.freeze({ epoch: g.epoch, catalog: b.shell266 }) : null;
          if (r.paintLocale(A) !== "APPLIED") throw Error("ROOT_SHELL266_ROLLBACK_RETAINED");
        } catch {
          l = !0;
        }
      if (N)
        try {
          if (!g || !e.file252) throw Error("ROOT_FILE252_ROLLBACK_EPOCH");
          const A = Object.freeze({ epoch: g.epoch, catalog: b?.file252 ?? null });
          if (e.file252.paintLocale(A) !== "APPLIED") throw Error("ROOT_FILE252_ROLLBACK_RETAINED");
        } catch {
          l = !0;
        }
      if (I)
        try {
          if (b && !g) throw Error("ROOT_ACHIEVEMENT_LIST_ROLLBACK_EPOCH");
          const A = b && g ? Object.freeze({ epoch: g.epoch, catalog: b.achievementList }) : null;
          if (e.achievementList.paintLocale(A) !== "APPLIED") throw Error("ROOT_ACHIEVEMENT_LIST_ROLLBACK_RETAINED");
        } catch {
          l = !0;
        }
      if (k)
        try {
          if (b && !g) throw Error("ROOT_ITEMS_ROLLBACK_EPOCH");
          const A = b && g ? Object.freeze({ epoch: g.epoch, catalog: b.items }) : null;
          if (e.items.paintLocale(A) !== "APPLIED") throw Error("ROOT_ITEMS_ROLLBACK_RETAINED");
        } catch {
          l = !0;
        }
      if (L)
        try {
          if (b && !g) throw Error("ROOT_CATEGORY_ROLLBACK_EPOCH");
          const A = b && g ? Object.freeze({ epoch: g.epoch, catalog: b.category }) : null;
          if (e.category.paintLocale(A) !== "APPLIED") throw Error("ROOT_CATEGORY_ROLLBACK_RETAINED");
        } catch {
          l = !0;
        }
      try {
        b ? t.apply(b.verified) : t.reset();
      } catch {
        l = !0;
      }
      throw o = b, s = _, G;
    } finally {
      c = !1;
    }
  }
  const E = Io({
    runtime: e.runtime,
    registry: pa,
    storage: e.storage,
    browser: e.browser,
    fetchVerified: async (h, b) => {
      if (r && !await r.ready) throw Error("ROOT_SHELL_UNAVAILABLE");
      const _ = Uint8Array.from(await e.load(b)), y = await Ho(_, b, e.sha256), O = await e.header.verifyHeaderCatalog(_, b, e.sha256), L = await e.category.verifyCategoryCatalog(_, b, e.sha256), k = await e.items.verifyItemsCatalog(_, b, e.sha256), I = await e.achievementList.verifyAchievementListCatalog(_, b, e.sha256), N = e.loadExtended ? (await Po(_, Uint8Array.from(await e.loadExtended(b)), b, e.sha256)).extended : null;
      let U = null;
      if (e.loadShell266) {
        if (!N) throw Error("ROOT_SHELL266_FILE252_REQUIRED");
        const A = Uint8Array.from(await e.loadShell266(b));
        U = await Jo(A, b);
        const x = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(A));
        if (!Object.entries(N.catalog).every(([K, ve]) => Object.hasOwn(x, K) && x[K] === ve)) throw Error("ROOT_SHELL266_PAIR_INCOMPATIBLE");
      }
      const G = a.get(b);
      if (G) return G;
      const g = Object.freeze({ version: "3.0.1", locale: b, verified: y, header: O, category: L, items: k, achievementList: I, file252: N, shell266: U });
      return a.set(b, g), g;
    },
    documentLanguage: (h) => {
      const b = a.get(h);
      if (!b) throw Error("ROOT_LOCALE_UNVERIFIED");
      w(b);
    }
  }), v = E.subscribe((h) => {
    if (h.status !== "READY")
      try {
        w(h.active?.pack ?? null);
      } catch {
        l = !0;
      }
  });
  return Object.freeze({
    consumer: E,
    get blocked() {
      return l;
    },
    get generation() {
      return s?.epoch ?? null;
    },
    readFilterLocale() {
      if (l || c) throw Error("ROOT_LOCALE_FILTER_TRANSITION");
      return d;
    },
    renderHeader(h) {
      const b = h.readSelected();
      return p = Object.freeze({ ...h, record: h.record ? Object.freeze({ ...h.record }) : null, selected: b }), l || c || !s ? "LEGACY_RETAINED" : u(s) ? "APPLIED" : "LEGACY_RETAINED";
    },
    close() {
      E.close(), v();
      try {
        o && w(null);
      } catch {
        l = !0;
      }
      p = null, a.clear(), r?.close();
    }
  });
}
function dl(e, t, n) {
  if (e !== t.doc.getElementById("hkiaLocaleChrome") || e.childNodes.length) throw Error("ROOT_LOCALE_HOST");
  const r = tl(t);
  r.renderHeader(n);
  const a = Mn(No, { target: e, props: { controller: r } });
  try {
    yt();
  } catch (o) {
    throw r.close(), bn(a).catch(() => {
    }), o;
  }
  let i = !1;
  return Object.freeze({
    readFilterLocale: () => i ? null : r.readFilterLocale(),
    renderHeader: (o) => i ? "LEGACY_RETAINED" : r.renderHeader(o),
    dispose() {
      i || (i = !0, r.close(), bn(a).catch(() => {
      }));
    }
  });
}
const lr = Object.freeze({ "file.title": [], "file.notLoaded": [], "file.drop": [], "file.choose": [], "file.chooseAria": [], "file.inputFormats": ["savePath", "accountPath"], "file.exportAccount": [], "file.exportZip": [], "file.zipBusy": [], "file.dirty": [], "file.structuralReadOnly": [], "file.tooLarge": [], "file.unsupportedFormats": [], "file.loadFailedPriorInvalid": [], "file.loadFailedReason": ["reason"], "file.accountExportBlocked": [], "file.zipExportFailed": ["reason"], "native.sessionLabel": [], "native.open": [], "native.close": [], "native.download": [], "native.discard": [], "native.ready": [], "native.busy": [], "native.moduleUnavailable": [], "native.chooseZip": [], "native.exportReady": [], "native.exportBlocked": [], "native.closed": [], "native.exported": [], "native.exportFailed": ["reason"], "native.discarded": [], "native.stagedLabel": [], "native.notDownloaded": [], "native.previewLabel": [], "native.versionSlotLabel": [], "native.revisionLabel": [], "native.capabilitiesLabel": [], "native.applyExportLabel": [], "revision.checking": [], "revision.observed": [], "revision.unknown": [], "revision.inputDetail": ["format", "shaPrefix", "epoch"], "revision.snapshotNotice": ["status"], "revision.fileChanged": [], "revision.unknownReason": ["reason"], "revision.comparisonScope": [], "revision.casMismatch": [], "revision.casUnknown": [], "revision.casLocalMatch": [], "revision.nativeOff": ["blockers"], "file.loadedSummary": ["accountCount", "slotCount"], "file.slotCountUnknown": [], "file.headerSummary": ["version", "versionInt", "platform", "ancestorCount", "metadataCount"], "file.slotStructuralReadOnly": [], "file.slotKnownRead": [], "file.slotDomainSummary": ["version", "achievement", "counter", "collectionHistory"], "file.slotOpaqueWarning": ["achievementExtra", "counterExtra", "unknownUnionCount"], "file.domainReadable": [], "file.domainUnknown": [] }), M = (e) => {
  if (!e) throw Error("FILE_SURFACE_LOCALE_CONTRACT");
}, nl =                 new Set(["epoch", "accountCount", "versionInt", "ancestorCount", "metadataCount", "achievementExtra", "counterExtra", "unknownUnionCount"]), et = { savePath: "save_0.save", accountPath: "SettingsAccount/settings.json" }, rl = (e) => typeof e == "string" && e.length > 0 && e.length <= 16384;
function al(e, t, n = {}) {
  M(Qt(e) && Object.hasOwn(lr, t) && n && Object.getPrototypeOf(n) === Object.prototype);
  const r = lr[t];
  M(Object.keys(n).length === r.length && r.every((l) => Object.hasOwn(n, l)));
  const a = {}, i = (l) => new Intl.NumberFormat(e.locale).format(l);
  for (const l of r) {
    const c = n[l];
    nl.has(l) ? c === null && (l === "achievementExtra" || l === "counterExtra") ? a[l] = "UNKNOWN" : (M(Number.isSafeInteger(c) && c >= 0), a[l] = l === "epoch" || l === "versionInt" ? String(c) : i(c)) : l === "slotCount" ? (M(c === null || Number.isSafeInteger(c) && c >= 0), a[l] = c === null ? e.catalog["file.slotCountUnknown"] : i(c)) : Object.hasOwn(et, l) ? (M(c === et[l]), a[l] = c) : l === "shaPrefix" ? (M(typeof c == "string" && /^[a-f0-9]{1,64}$/.test(c)), a[l] = c) : (M(rl(c)), a[l] = c);
  }
  const o = e.catalog[t], s = [...o.matchAll(/\{([A-Za-z][A-Za-z0-9]*)\}/g)].map((l) => l[1]);
  return M(s.length === r.length && r.every((l) => s.filter((c) => c === l).length === 1)), o.replace(/\{([A-Za-z][A-Za-z0-9]*)\}/g, (l, c) => a[c]);
}
const Ln = [
  ["#upload-heading", "text", "file.title", "セーブファイル"],
  ["#dropArea strong", "text", "file.drop", "ファイルをここにドロップ"],
  ["#dropArea .choose-file", "firstText", "file.choose", "ファイルを選択"],
  ["#saveInput", "aria-label", "file.chooseAria", "セーブファイルを選択"],
  [".file-surface section[aria-label]", "aria-label", "native.sessionLabel", "Native検証Session"],
  ["#openNativePreview", "text", "native.open", "Native検証Sessionを開く"],
  ["#closeNativePreview", "text", "native.close", "Sessionを閉じる"],
  ["#nativeDownload", "text", "native.download", "Edited-copy Download"],
  ["#nativeDiscard", "text", "native.discard", "候補を破棄（Reset）"],
  ["#downloadOriginal", "text", "file.backup", "元ファイルをバックアップ"],
  ["#downloadEdited", "text", "file.exportAccount", "編集したsettings.jsonを保存"],
  ["#downloadZip", "text", "file.exportZip", "編集したZIPを保存"]
];
Object.freeze(Ln.map((e) => Object.freeze(e)));
function il(e, { dynamicZip: t = !1 } = {}) {
  const n = t ? Ln.filter((g) => g[0] !== "#downloadZip") : Ln, r = (g) => {
    const A = e.querySelectorAll(g);
    return M(A.length === 1), A[0];
  }, a = n.map(([g]) => r(g)), i = a.map((g) => g.parentElement), o = r("#saveInput");
  M(o.tagName === "INPUT" && o.type === "file");
  const s = (g, A) => (M(g.firstChild?.nodeType === 3 && (A ? g.childNodes.length === 2 && g.childNodes[1] === o : g.childNodes.length === 1)), g.firstChild), l = n.map(([, g, A, x], K) => {
    const ve = a[K], Y = g === "text" || g === "firstText" ? s(ve, g === "firstText") : null;
    return { n: ve, t: Y, p: g, k: A, ja: x, read: () => Y ? Y.data : ve.getAttribute(g), write: (je) => Y ? Y.data = je : ve.setAttribute(g, je) };
  }), c = r("#dropArea p"), d = [...c.childNodes];
  M(d.length === 4 && d[0].nodeType === 3 && d[1].tagName === "CODE" && d[2].nodeType === 3 && d[3].tagName === "CODE" && d[1].textContent === et.savePath && d[3].textContent === et.accountPath);
  const p = [d[1], d[3]].map((g) => s(g, !1)), m = (g) => {
    const A = [];
    for (let x = g; x; x = x.parentNode) A.push(x);
    return A;
  }, u = new Map([...a, c].map((g) => [g, m(g)])), f = (g, A) => g.length === A.length && g.every((x, K) => x === A[K]), w = () => f([...c.childNodes], d) && [d[1], d[3]].every((g, A) => f([...g.childNodes], [p[A]])) && d[1].textContent === et.savePath && d[3].textContent === et.accountPath, E = [...l, ...[0, 2].map((g, A) => ({ n: c, t: d[g], ja: ["SwitchバックアップZIP、", "、または"][A], read: () => d[g].data, write: (x) => d[g].data = x, formatIndex: A }))];
  function v(g) {
    const A = /^([^{}]*)\{savePath\}([^{}]*)\{accountPath\}$/.exec(g.catalog["file.inputFormats"]);
    return M(A), A.slice(1);
  }
  let h = E.map((g) => g.ja), b = null, _ = !1, y = -1;
  M(E.every((g) => g.read() === g.ja));
  const O = (g) => g.n.isConnected && f(m(g.n), u.get(g.n)) && (!g.t || g.t.parentNode === g.n), L = (g) => !g.t || (g.n === c ? w() : g.p === "firstText" ? f([...g.n.childNodes], [g.t, o]) : f([...g.n.childNodes], [g.t])), k = () => {
    M(a.every((g, A) => r(n[A][0]) === g && g.parentElement === i[A]) && E.every((g) => O(g) && L(g)) && o.type === "file" && r("#dropArea p") === c);
  };
  k();
  const I = () => E.map((g) => g.read()), N = () => [e.activeElement, ...a.flatMap((g) => [g.disabled, g.hidden, g.value, g.className]), r("#fileStatus").textContent, r("#nativeSessionStatus").textContent], U = (g, A) => g.length === A.length && g.every((x, K) => x === A[K]);
  function G(g, A, x) {
    M(!_ && Number.isSafeInteger(x) && x >= 0 && x > y), _ = !0;
    const K = [];
    try {
      k(), M(U(I(), h));
      const ve = N();
      for (const [Y, je] of E.entries()) h[Y] !== g[Y] && (K.push(Y), je.write(g[Y]));
      return k(), M(U(I(), g) && U(N(), ve)), h = g, b = A, y = x, !0;
    } catch (ve) {
      for (const Y of K.reverse()) {
        const je = E[Y];
        try {
          O(je) && je.read() === g[Y] && je.write(h[Y]);
        } catch {
        }
      }
      throw ve;
    } finally {
      _ = !1;
    }
  }
  return Object.freeze({ get active() {
    return b;
  }, ownsCurrent() {
    try {
      return E.every((g, A) => O(g) && g.read() === h[A]);
    } catch {
      return !1;
    }
  }, apply(g, A) {
    M(Qt(g));
    const x = v(g);
    return G(E.map((K) => K.k ? g.catalog[K.k] : x[K.formatIndex]), g.locale, A);
  }, reset(g) {
    return G(E.map((A) => A.ja), null, g);
  } });
}
const ee = (e) => {
  if (!e) throw Error("FILE252_PRODUCT_PORT_CONTRACT");
}, Bt = (e) => e !== null && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype, kn = (e, t) => Bt(e) && Object.keys(e).length === t.length && t.every((n) => Object.hasOwn(e, n)), Sn = (e) => typeof e == "string" && e.length <= 65536, ol =                 new Set(["file.domainReadable", "file.domainUnknown"]);
function La(e, t = 0) {
  if (kn(e, ["kind", "text"]) && e.kind === "literal" && Sn(e.text)) return Object.freeze({ ...e });
  ee(kn(e, ["kind", "key", "params"]) && e.kind === "role" && typeof e.key == "string" && Bt(e.params) && t <= 1);
  const n = {};
  for (const [r, a] of Object.entries(e.params))
    Bt(a) ? (ee(t === 0 && e.key === "file.slotDomainSummary" && ["achievement", "counter", "collectionHistory"].includes(r) && ol.has(a.key)), n[r] = La(a, 1)) : (ee(a === null || typeof a == "string" || Number.isSafeInteger(a)), n[r] = a);
  return Object.freeze({ kind: "role", key: e.key, params: Object.freeze(n) });
}
const hl = (e, t = {}) => Object.freeze({ kind: "role", key: e, params: Object.freeze({ ...t }) });
function pl(e) {
  const t = il(e, { dynamicZip: !0 }), n =                 new Map();
  let r = null, a = -1, i = !1, o = !1;
  const s = (v) => {
    const h = [];
    for (let b = v; b; b = b.parentNode) h.push(b);
    return h;
  }, l = (v, h) => v.length === h.length && v.every((b, _) => b === h[_]), c = (v) => v.target.isConnected && l(s(v.target), v.anchor) && v.text.parentNode === v.target, d = (v) => c(v) && v.target.childNodes.length === 1 && v.target.firstChild === v.text && v.text.nodeType === 3, p = (v, h) => h.kind === "literal" ? h.text : al(v, h.key, Object.fromEntries(Object.entries(h.params).map(([b, _]) => [b, Bt(_) ? p(v, _) : _]))), m = (v, h) => v ? h.tokens.map((b) => p(v, b)).join(h.separator) : h.fallback, u = () => {
    for (const [v, h] of n) h.anchor && !v.isConnected && n.delete(v);
  }, f = (v) => {
    v.anchor === null && v.target.isConnected && (v.anchor = s(v.target));
  };
  function w(v, h, b, _ = "") {
    ee(!i && !o && v && v.nodeType === 1 && Sn(b) && Sn(_));
    const y = n.get(v);
    y && (f(y), ee(y.text.parentNode === v && v.childNodes.length === 1 && y.text.data === y.expected && (!y.anchor || l(s(v), y.anchor))));
    const O = h === null ? null : Array.isArray(h) ? h : [h], L = O ? Object.freeze(O.map((U) => La(U))) : null;
    ee(!L || L.length > 0 && L.length <= 32);
    const k = v.firstChild ?? e.createTextNode("");
    ee(k.nodeType === 3 && v.childNodes.length <= 1);
    const I = { target: v, text: k, anchor: v.isConnected ? s(v) : null, tokens: L, fallback: b, separator: _, expected: null }, N = L ? m(r, I) : b;
    return v.firstChild || v.append(k), k.data = N, ee(v.childNodes.length === 1 && v.firstChild === k && k.data === N), I.expected = N, L ? (u(), ee(n.size < 4096 || n.has(v)), n.set(v, I)) : n.delete(v), !0;
  }
  function E(v) {
    if (o) return "BLOCKED";
    if (i || !kn(v, ["epoch", "catalog"]) || !Number.isSafeInteger(v.epoch) || v.epoch < 0 || v.epoch <= a || !(v.catalog === null || Qt(v.catalog))) return "LEGACY_RETAINED";
    i = !0;
    const h = [], b = [];
    try {
      u();
      for (const _ of n.values())
        f(_), _.target.isConnected && (ee(d(_) && _.text.data === _.expected), b.push({ r: _, old: _.expected, next: m(v.catalog, _) }));
      for (const _ of b)
        _.old !== _.next && (h.push(_), _.r.text.data = _.next);
      ee(b.every((_) => d(_.r) && _.r.text.data === _.next)), v.catalog ? t.apply(v.catalog, v.epoch) : t.reset(v.epoch);
      for (const _ of b) _.r.expected = _.next;
      return r = v.catalog, a = v.epoch, "APPLIED";
    } catch {
      for (const y of h.reverse())
        try {
          c(y.r) && y.r.text.data === y.next && (y.r.text.data = y.old);
        } catch {
        }
      return !t.ownsCurrent() || !h.every((y) => c(y.r) && y.r.text.data === y.old) ? (o = !0, "BLOCKED") : "LEGACY_RETAINED";
    } finally {
      i = !1;
    }
  }
  return Object.freeze({ write: w, forget(v) {
    ee(!i), n.delete(v);
  }, paintLocale: E, get active() {
    return r?.locale ?? null;
  }, get blocked() {
    return o;
  } });
}
function vl(e) {
  const t = () => {
    throw Error("FILE252_DISPLAY_FACTS_CONTRACT");
  }, n = (m, u) => m !== null && typeof m == "object" && Object.getPrototypeOf(m) === Object.prototype && Object.keys(m).length === u.length && u.every((f) => Object.hasOwn(m, f)), r = (m) => Number.isSafeInteger(m) && m >= 0, a = ["hasAccount", "hasSlot", "dirty", "structuralReadOnly", "sourceLoading", "revisionChanged", "archiveLoaded", "zipExportBusy"];
  (!n(e, [...a, "sourceLoadEpoch", "revision", "revisionError", "accountCount", "slotCount"]) || !a.every((m) => typeof e[m] == "boolean") || !r(e.sourceLoadEpoch) || !r(e.accountCount) || !(e.slotCount === null || r(e.slotCount)) || !e.hasAccount && e.accountCount !== 0 || !e.hasSlot && e.slotCount !== 0 || e.revisionError !== null && (typeof e.revisionError != "string" || !e.revisionError.length || e.revisionError.length > 16384)) && t();
  const i = e.revision;
  i !== null && (!n(i, ["schema", "sha256", "epoch", "format"]) || i.schema !== "HKIA.Web05.SourceRevisionDisplay.1" || typeof i.sha256 != "string" || !/^[a-f0-9]{64}$/.test(i.sha256) || !r(i.epoch) || i.epoch < 1 || i.epoch !== e.sourceLoadEpoch || !["zip", "account-json", "save"].includes(i.format)) && t(), e.sourceLoading && (i !== null || e.hasAccount || e.hasSlot || e.dirty || e.archiveLoaded) && t();
  const o = (m, u = {}) => Object.freeze({ kind: "role", key: m, params: Object.freeze(u) }), s = (m) => Object.freeze({ kind: "literal", text: m }), l = e.structuralReadOnly || e.sourceLoading || e.revisionChanged && i === null, c = [e.hasAccount && e.hasSlot ? s("Account + Save slot") : e.hasAccount ? s("Account JSON") : e.hasSlot ? s("Save slot") : o("file.notLoaded")];
  e.dirty && c.push(o("file.dirty")), l && c.push(o("file.structuralReadOnly"));
  const d = [];
  (i !== null || e.revisionError !== null || e.sourceLoading || e.revisionChanged) && (d.push(o(e.sourceLoading ? "revision.checking" : i ? "revision.observed" : "revision.unknown")), i && d.push(o("revision.inputDetail", { format: i.format, shaPrefix: i.sha256.slice(0, 16), epoch: i.epoch }), o("revision.snapshotNotice", { status: "LOCAL_SNAPSHOT_MATCH_ONLY" })), e.revisionChanged && d.push(o("revision.fileChanged")), e.revisionError !== null && d.push(o("revision.unknownReason", { reason: e.revisionError })), d.push(o("revision.comparisonScope")));
  const p = e.hasAccount || e.hasSlot ? o("file.loadedSummary", { accountCount: e.accountCount, slotCount: e.slotCount }) : null;
  return Object.freeze({ fileStatus: Object.freeze(c), revision: Object.freeze(d), loaded: p, zipLabel: o(e.zipExportBusy ? "file.zipBusy" : "file.exportZip") });
}
function ml(e) {
  const t = () => {
    throw Error("FILE252_NATIVE_FACTS_CONTRACT");
  }, n = (u, f) => u !== null && typeof u == "object" && Object.getPrototypeOf(u) === Object.prototype && Object.keys(u).length === f.length && f.every((w) => Object.hasOwn(u, w)), r = (u) => typeof u == "string" && u.length > 0 && u.length <= 16384, a = (u) => typeof u == "string" && /^[a-f0-9]{64}$/.test(u), i = (u, f = {}) => Object.freeze({ kind: "role", key: u, params: Object.freeze(f) }), o = (u) => Object.freeze({ kind: "literal", text: u });
  (!n(e, ["ready", "busy", "moduleStaged", "notice", "version", "revision", "capabilities", "stagedOperation"]) || !["ready", "busy", "moduleStaged"].every((u) => typeof e[u] == "boolean") || !(e.version === null || ["3.0.0", "3.0.1"].includes(e.version)) || !(e.revision === null || a(e.revision)) || !(e.capabilities === null || Array.isArray(e.capabilities) && e.capabilities.length <= 256 && e.capabilities.every(r)) || !(e.stagedOperation === null || r(e.stagedOperation))) && t(), e.ready && (!e.version || !e.revision || !Array.isArray(e.capabilities)) && t(), !e.ready && !e.busy && e.revision !== null && t();
  let s = null;
  const l = e.notice;
  n(l, ["kind"]) && ["none", "closed", "exported", "discarded"].includes(l.kind) ? l.kind !== "none" && (s = i("native." + l.kind)) : n(l, ["kind", "reason"]) && r(l.reason) && ["raw", "exportFailed"].includes(l.kind) ? s = l.kind === "raw" ? o(l.reason) : i("native.exportFailed", { reason: l.reason }) : t();
  const c = e.ready ? i("native.ready") : e.busy ? i("native.busy") : s ?? i(e.moduleStaged ? "native.chooseZip" : "native.moduleUnavailable"), d = (u, f) => Object.freeze({ label: i(u), value: f }), p = [];
  e.ready && p.push(
    d("native.versionSlotLabel", o(e.version + " / Saves/save_0.save")),
    d("native.revisionLabel", o(e.revision)),
    d("native.capabilitiesLabel", o(e.capabilities.join(" / "))),
    d("native.applyExportLabel", i(e.stagedOperation !== null ? "native.exportReady" : "native.exportBlocked"))
  );
  const m = e.stagedOperation === null ? null : Object.freeze({ label: i("native.stagedLabel"), operation: o(e.stagedOperation), status: i("native.notDownloaded") });
  return Object.freeze({ label: i("native.previewLabel"), main: c, details: Object.freeze(p), staged: m, notice: e.ready ? s : null });
}
function gl(e) {
  const t = () => {
    throw Error("FILE252_SLOT_FACTS_CONTRACT");
  }, n = (d, p) => d !== null && typeof d == "object" && Object.getPrototypeOf(d) === Object.prototype && Object.keys(d).length === p.length && p.every((m) => Object.hasOwn(d, m)), r = (d) => typeof d == "string" && d.length > 0 && d.length <= 16384, a = (d) => Number.isSafeInteger(d) && d >= 0, i = (d, p = {}) => Object.freeze({ kind: "role", key: d, params: Object.freeze(p) });
  n(e, ["header", "slot"]) || t();
  let o = null, s = null;
  const l = e.header, c = e.slot;
  if (l !== null && ((!n(l, ["version", "versionInt", "platform", "ancestorCount", "metadataCount"]) || !r(l.version) || !r(l.platform) || !a(l.versionInt) || !a(l.ancestorCount) || !a(l.metadataCount)) && t(), o = i("file.headerSummary", { ...l })), c !== null) {
    const d = ["achievement", "counter", "collection-history"];
    (!n(c, ["mode", "version", "readable", "extraFields", "unknownUnionCount", "warnings"]) || !["STRUCTURAL_READ_ONLY", "VALIDATED_BASELINE_READ"].includes(c.mode) || !r(c.version) || !n(c.readable, d) || !d.every((f) => typeof c.readable[f] == "boolean") || !d.some((f) => c.readable[f]) || !n(c.extraFields, ["achievement", "counter"]) || !["achievement", "counter"].every((f) => c.readable[f] ? a(c.extraFields[f]) : c.extraFields[f] === null) || !a(c.unknownUnionCount) || !Array.isArray(c.warnings) || c.warnings.length > 256 || !c.warnings.every(r)) && t();
    const p = c.mode === "STRUCTURAL_READ_ONLY";
    !p && (!d.every((f) => c.readable[f]) || c.extraFields.achievement !== 0 || c.extraFields.counter !== 0 || c.unknownUnionCount !== 0) && t(), p && l !== null && t();
    const m = Object.freeze(Object.fromEntries(d.map((f) => [f, i(c.readable[f] ? "file.domainReadable" : "file.domainUnknown")]))), u = p ? i("file.slotOpaqueWarning", { achievementExtra: c.extraFields.achievement, counterExtra: c.extraFields.counter, unknownUnionCount: c.unknownUnionCount }) : null;
    s = Object.freeze({ mode: i(p ? "file.slotStructuralReadOnly" : "file.slotKnownRead"), version: c.version, domains: m, opaqueWarning: u, warnings: Object.freeze(c.warnings.slice()) });
  } else l !== null && t();
  return Object.freeze({ header: o, slot: s });
}
var ll =                 We('<div class="hk-shell-workspace"><!></div>'), sl =                 We('<div><div class="hk-shell-localized"></div> <!></div>');
function cl(e, t) {
  Yt(t, !0);
  let n = mo(t, "externalWorkspace"), r =                 me(!1), a = null;
  const i = (f) => {
    ge(r, f, !0), n() && (n().hidden = !f, n().inert = !f);
  };
  function o(f, w) {
    const E = $o(f, w);
    return a = E, {
      update: (v) => E.update(v),
      destroy() {
        a = null, E.destroy(), i(!1);
      }
    };
  }
  function s(f, w) {
    return a?.update({
      snapshot: f,
      locale: w,
      dispatch: t.dispatch,
      workspace: i
    }) ?? "REJECTED";
  }
  var l = { project: s }, c = sl();
  let d;
  var p = Se(c);
  to(p, (f, w) => o?.(f, w), () => ({
    snapshot: t.snapshot,
    locale: t.locale,
    dispatch: t.dispatch,
    workspace: i
  }));
  var m = ae(p, 2);
  {
    var u = (f) => {
      var w = ll(), E = Se(w);
      $i(E, () => t.workspace), ke(w), De(f, w);
    };
    It(m, (f) => {
      T(r) && t.workspace && !n() && f(u);
    });
  }
  return ke(c), ze(() => d = io(c, 1, ro(T(r) ? "hk-shell-canvas hk-shell-ready" : "hk-shell-canvas"), null, d, { "hk-shell-external": !!n() })), De(e, c), Wt(l);
}
const fl =                 Object.freeze(                Object.defineProperty({
  __proto__: null,
  default: cl
}, Symbol.toStringTag, { value: "Module" }));
export {
  pl as createFile252ProductPort,
  hl as file252Role,
  dl as mountProductLocaleRoot192,
  vl as projectFile252Facts,
  ml as projectNative252Facts,
  gl as projectSlot252Facts
};
