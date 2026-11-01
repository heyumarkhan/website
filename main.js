/* HeyUmar — a small, dependency-free creative studio. */
(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let paused = reducedMotion.matches,
    orbVisible = true,
    material = 0;
  const motionButton = document.querySelector("#motion-toggle");
  const setMotion = (value) => {
    paused = value;
    document.documentElement.classList.toggle("motion-paused", paused);
    motionButton.setAttribute("aria-pressed", String(paused));
    motionButton.textContent = paused ? "Resume motion ▷" : "Pause motion Ⅱ";
  };
  setMotion(paused);
  motionButton.addEventListener("click", () => setMotion(!paused));
  reducedMotion.addEventListener("change", (event) => setMotion(event.matches));
  document.querySelector("#year").textContent = String(
    new Date().getFullYear(),
  );
  const revealObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.07 },
        )
      : null;
  document
    .querySelectorAll(".reveal")
    .forEach((el) =>
      revealObserver ? revealObserver.observe(el) : el.classList.add("visible"),
    );
  const menu = document.querySelector(".menu-toggle"),
    nav = document.querySelector("#main-nav");
  function closeMenu() {
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  }
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    nav.classList.toggle("is-open", open);
  });
  nav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menu.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  window
    .matchMedia("(min-width: 761px)")
    .addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  let scrollQueued = false;
  const progress = document.querySelector(".scroll-progress");
  window.addEventListener(
    "scroll",
    () => {
      if (scrollQueued) return;
      scrollQueued = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
        scrollQueued = false;
      });
    },
    { passive: true },
  );
  document.querySelectorAll(".service-list details").forEach((details) =>
    details.addEventListener("toggle", () => {
      if (details.open)
        document.querySelectorAll(".service-list details").forEach((other) => {
          if (other !== details) other.open = false;
        });
    }),
  );
  const goals = {
    launch: {
      idea: "Your next big launch.",
      subject: "Let’s plan a product launch",
      outputs: [
        [
          "MOTION",
          "A cinematic product story",
          "A hero film that gives people a reason to care.",
        ],
        [
          "VISUAL",
          "A world around your product",
          "Campaign imagery with a distinctive, consistent look.",
        ],
        [
          "CONTENT",
          "A launch that keeps talking",
          "Social cutdowns, launch copy, and email storytelling.",
        ],
      ],
    },
    authority: {
      idea: "Your perspective. Amplified.",
      subject: "Let’s build brand authority",
      outputs: [
        [
          "STRATEGY",
          "A point of view worth owning",
          "Distinctive editorial pillars grounded in your expertise.",
        ],
        [
          "CONTENT",
          "Ideas that earn attention",
          "Expert-led articles, founder stories, and search content.",
        ],
        [
          "DISTRIBUTION",
          "More places to be discovered",
          "LinkedIn posts, email editions, and social adaptations.",
        ],
      ],
    },
    social: {
      idea: "A brand with main-character energy.",
      subject: "Let’s create a social content system",
      outputs: [
        [
          "DIRECTION",
          "A feed that feels like you",
          "A recognizable visual language and a consistent voice.",
        ],
        [
          "MOTION",
          "Stories built for the scroll",
          "Short-form series, motion hooks, and creative variations.",
        ],
        [
          "SYSTEMS",
          "A rhythm you can keep",
          "A repeatable calendar, repurposing, and creative testing.",
        ],
      ],
    },
  };
  const tabs = [...document.querySelectorAll("[data-goal]")];
  function selectGoal(tab) {
    const goal = goals[tab.dataset.goal];
    tabs.forEach((button) => {
      const selected = button === tab;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    document
      .querySelector("#engine-panel")
      .setAttribute("aria-labelledby", tab.id);
    document.querySelector("#engine-idea").textContent = goal.idea;
    document.querySelector("#engine-outputs").replaceChildren(
      ...goal.outputs.map((output) => {
        const card = document.createElement("div"),
          title = document.createElement("h4"),
          description = document.createElement("p");
        title.textContent = output[1];
        description.textContent = output[2];
        card.append(title, description);
        return card;
      }),
    );
    document.querySelector("#engine-contact").href =
      `mailto:studio@heyumar.com?subject=${encodeURIComponent(goal.subject)}`;
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectGoal(tab));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft")
        next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        tabs[next].focus();
        selectGoal(tabs[next]);
      }
    });
  });
  const projects = {
    afterhours: {
      title: "Afterhours",
      category: "BRAND WORLD / CAMPAIGN IMAGERY",
      description:
        "An imagined fragrance brand for the hours that belong to you. Warm eclipse light, sculptural glass, and an unapologetically nocturnal visual world turn a product into a feeling.",
      deliverables: [
        "A cinematic, after-dark art direction",
        "Product compositions and campaign key visuals",
        "A visual language for launch copy and social adaptations",
      ],
    },
    offscript: {
      title: "Offscript",
      category: "ART DIRECTION / SOCIAL CAMPAIGN",
      description:
        "A fictional movement brand with an independent streak. Electric lavender, acid-yellow type, and kinetic sculptural forms create a campaign that feels restless, optimistic, and impossible to ignore.",
      deliverables: [
        "A bold visual identity and creative direction",
        "A system of social campaign layouts",
        "Motion-ready graphic forms and typographic treatments",
      ],
    },
  };
  const dialog = document.querySelector("#project-dialog");
  document.querySelectorAll("[data-project]").forEach((button) =>
    button.addEventListener("click", () => {
      const project = projects[button.dataset.project];
      document.querySelector("#dialog-title").textContent = project.title;
      document.querySelector("#dialog-category").textContent = project.category;
      document.querySelector("#dialog-description").textContent =
        project.description;
      document.querySelector("#dialog-deliverables").replaceChildren(
        ...project.deliverables.map((text) => {
          const li = document.createElement("li");
          li.textContent = text;
          return li;
        }),
      );
      dialog.showModal();
    }),
  );
  document
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  document
    .querySelector(".dialog-cta")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
  document.querySelector("#copy-email").addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");
    try {
      await navigator.clipboard.writeText("studio@heyumar.com");
      status.textContent = "Email copied. Say hey!";
    } catch {
      status.textContent = "Select the email address to copy it.";
    }
    window.setTimeout(() => {
      status.textContent = "";
    }, 5000);
  });
  /* Real-time raymarched chrome; a CSS sculpture remains as a no-WebGL fallback. */
  const canvas = document.querySelector("#orb-canvas"),
    art = document.querySelector("#hero-art"),
    control = document.querySelector("#orb-control");
  control.addEventListener("click", () => {
    material = (material + 1) % 3;
    document.querySelector("#orb-label").textContent = "Change color";
    control.setAttribute(
      "aria-label",
      `Change sculpture material to ${["iridescent", "electric green", "chrome"][material]}`,
    );
    if (!art.classList.contains("ready"))
      art.style.filter = `hue-rotate(${material * 85}deg)`;
  });
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    powerPreference: "low-power",
    preserveDrawingBuffer: true,
  });
  if (!gl) return;
  const vertex = `attribute vec2 a_position;void main(){gl_Position=vec4(a_position,0.,1.);}`;
  const fragment = `
    precision mediump float;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform float u_material;
    mat2 rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
    float shape(vec3 p){
      p.xz=rot(.4+u_time*.13+u_mouse.x*.45)*p.xz;
      p.xy=rot(-.5+u_mouse.y*.18)*p.xy;
      float wave=sin(p.x*3.1+u_time*.35)*sin(p.y*3.0-u_time*.23)*sin(p.z*3.2+u_time*.2);
      p.z+=.14*sin(p.x*2.5+u_time*.25);
      return length(vec2(length(p.xy)-.82,p.z))-.42+wave*.08;
    }
    vec3 normal(vec3 p){vec2 e=vec2(.003,0.);return normalize(vec3(shape(p+e.xyy)-shape(p-e.xyy),shape(p+e.yxy)-shape(p-e.yxy),shape(p+e.yyx)-shape(p-e.yyx)));}
    vec3 environment(vec3 r){
      float bands=pow(max(0.,sin(r.y*4.+r.x*2.4)),9.);
      float strip=pow(max(0.,sin(r.y*9.-r.z*2.)),25.);
      vec3 low=vec3(.07,.085,.055);vec3 high=vec3(.92,.95,.8);
      if(u_material>.5&&u_material<1.5){low=vec3(.12,.06,.2);high=vec3(.75,.65,1.);}
      if(u_material>1.5){low=vec3(.04,.12,.025);high=vec3(.69,1.,.18);}
      return low+high*bands*1.5+vec3(.9,.98,.85)*strip*.75+vec3(.17,.22,.08)*max(r.x,0.);
    }
    void main(){
      vec2 uv=(gl_FragCoord.xy-.5*u_resolution)/min(u_resolution.x,u_resolution.y);
      vec3 ro=vec3(0.,0.,4.6);vec3 rd=normalize(vec3(uv*3.2,-4.));
      ro.x+=u_mouse.x*.12;ro.y+=u_mouse.y*.09;
      float t=0.;vec3 p;bool hit=false;
      for(int i=0;i<72;i++){p=ro+rd*t;float d=shape(p);if(d<.0025){hit=true;break;}t+=d*.8;if(t>8.)break;}
      if(!hit){gl_FragColor=vec4(0.);return;}
      vec3 n=normal(p);vec3 reflection=reflect(rd,n);vec3 col=environment(reflection);
      float fres=pow(1.-max(0.,dot(-rd,n)),3.);col+=vec3(.42,.52,.22)*fres*.55;
      float spec=pow(max(dot(reflect(normalize(vec3(-3.,4.,3.)),n),rd),0.),42.);col+=vec3(1.,1.,.83)*spec*.9;
      float ao=clamp(shape(p+n*.16)/.16,.25,1.);col*=ao;
      col=pow(col,vec3(.83));gl_FragColor=vec4(col,1.);
    }`;
  function shader(type, source) {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      gl.deleteShader(s);
      return null;
    }
    return s;
  }
  const vs = shader(gl.VERTEX_SHADER, vertex),
    fs = shader(gl.FRAGMENT_SHADER, fragment);
  if (!vs || !fs) return;
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  const position = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const uniforms = Object.fromEntries(
    ["u_resolution", "u_time", "u_mouse", "u_material"].map((name) => [
      name,
      gl.getUniformLocation(program, name),
    ]),
  );
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  art.addEventListener("pointermove", (event) => {
    if (paused) return;
    const rect = art.getBoundingClientRect();
    mouse.tx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.ty = 1 - ((event.clientY - rect.top) / rect.height) * 2;
  });
  art.addEventListener("pointerleave", () => {
    mouse.tx = 0;
    mouse.ty = 0;
  });
  let needsDraw = true;
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr * 0.8);
    canvas.height = Math.round(rect.height * dpr * 0.8);
    gl.viewport(0, 0, canvas.width, canvas.height);
    needsDraw = true;
  }
  new ResizeObserver(resize).observe(canvas);
  if ("IntersectionObserver" in window)
    new IntersectionObserver((entries) => {
      orbVisible = entries[0].isIntersecting;
      if (orbVisible) needsDraw = true;
    }).observe(art);
  let elapsed = 0,
    lastTime = 0,
    lastDraw = -100,
    lastMaterial = -1;
  function frame(time) {
    requestAnimationFrame(frame);
    const delta = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;
    if (document.hidden || !orbVisible || gl.isContextLost()) return;
    if (!paused) elapsed += delta;
    if (paused && material === lastMaterial && !needsDraw) return;
    if (time - lastDraw < 33) return;
    lastDraw = time;
    lastMaterial = material;
    needsDraw = false;
    mouse.x += (mouse.tx - mouse.x) * 0.045;
    mouse.y += (mouse.ty - mouse.y) * 0.045;
    gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height);
    gl.uniform1f(uniforms.u_time, elapsed);
    gl.uniform2f(uniforms.u_mouse, mouse.x, mouse.y);
    gl.uniform1f(uniforms.u_material, material);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    art.classList.add("ready");
  }
  canvas.addEventListener("webglcontextlost", () => {
    art.classList.remove("ready");
  });
  resize();
  requestAnimationFrame(frame);
})();
