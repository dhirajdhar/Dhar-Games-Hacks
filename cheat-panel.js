(function() {
    // Prevent multiple panels
    if (window.__DG_DEV_PANEL__) return;
    window.__DG_DEV_PANEL__ = true;

    // Create panel
    var panel = document.createElement("div");
    panel.style.position = "fixed";
    panel.style.top = "20px";
    panel.style.right = "20px";
    panel.style.width = "220px";
    panel.style.padding = "12px";
    panel.style.background = "rgba(0,0,0,0.85)";
    panel.style.color = "white";
    panel.style.fontFamily = "Arial";
    panel.style.fontSize = "14px";
    panel.style.border = "1px solid #444";
    panel.style.borderRadius = "8px";
    panel.style.zIndex = 999999;

    panel.innerHTML =
        "<b>👾 Dhar Games Cheat Panel</b><br><br>" +
        "<label><input id='dg_fly' type='checkbox'> Fly Mode</label><br>" +
        "<label><input id='dg_noclip' type='checkbox'> Noclip</label><br>" +
        "<label>Speed: <input id='dg_speed' type='number' value='1' min='0.1' step='0.1' style='width:60px'></label><br>" +
        "<label>Gravity: <input id='dg_grav' type='number' value='-2000' step='100' style='width:80px'></label><br><br>" +
        "<button id='dg_close' style='width:100%;padding:4px;'>Close</button>";

    document.body.appendChild(panel);

    // Hook UI
    var flyBox = document.getElementById("dg_fly");
    var noclipBox = document.getElementById("dg_noclip");
    var speedInput = document.getElementById("dg_speed");
    var gravInput = document.getElementById("dg_grav");
    var closeBtn = document.getElementById("dg_close");

    // Apply changes to your existing variables
    flyBox.onchange = function() {
        localPlayer.vy = 0;
        window.flyMode = flyBox.checked;
    };

    noclipBox.onchange = function() {
        window.noclip = noclipBox.checked;
    };

    speedInput.oninput = function() {
        walkSpeed = Number(speedInput.value);
        window.playerSpeedMultiplier = Number(speedInput.value);
    };

    gravInput.oninput = function() {
        GRAVITY = Number(gravInput.value);
        window.GRAVITY = Number(gravInput.value);
    };

    closeBtn.onclick = function() {
        panel.remove();
        window.__DG_DEV_PANEL__ = false;
    };

    console.log("Dhar Games Cheat Panel loaded.");
})();
