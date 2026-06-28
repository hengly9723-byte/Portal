const toggleBtnDesktop = document.getElementById('toggleSidebarDesktop');
const toggleBtnMobile = document.getElementById('toggleSidebarMobile');
const sidebar = document.getElementById('sidebar');
const dateInput = document.getElementById('today-date');
const today = new Date().toISOString().split('T')[0];
const timeInput = document.getElementById('time');

function isMobileLayout() {
    return window.innerWidth < 768;
}

function openMobileSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
}

function closeMobileSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebar.classList.remove('translate-x-0');
}

function toggleMobileSidebar() {
    if (sidebar.classList.contains('-translate-x-full')) {
        openMobileSidebar();
    } else {
        closeMobileSidebar();
    }
}

function toggleDesktopWidth() {
    if (sidebar.classList.contains('w-[270px]')) {
        sidebar.classList.remove('w-[270px]');
        sidebar.classList.add('w-[56px]');
    } else {
        sidebar.classList.remove('w-[56px]');
        sidebar.classList.add('w-[270px]');
    }
}

// Mobile hamburger button (top right) — slides the drawer in/out
if (toggleBtnMobile) {
    toggleBtnMobile.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMobileSidebar();
    });
}

// Desktop hamburger button (top left) — collapses/expands the rail width
if (toggleBtnDesktop) {
    toggleBtnDesktop.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDesktopWidth();
    });
}

// Clicking a sidebar link on mobile should also close the drawer
if (sidebar) {
    sidebar.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (isMobileLayout()) {
                closeMobileSidebar();
            }
        });
    });
}

dateInput.value = today;
timeInput.value = new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5);
