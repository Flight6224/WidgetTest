(function() {
    document.addEventListener('DOMContentLoaded', async function() {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Flight6224/WidgetTest/877e3a73f27d7cc91bc232af448154dba02519bf/trigger-workflow.html');
            if (!response.ok) throw new Error('HTTP error');
            
            const htmlContent = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            
            document.body.append(doc.documentElement.firstChild);
            
            document.body.addEventListener('click', e => {
                if (e.target.matches('#navModalBtn')) {
                    document.querySelector('imi-event-modal')?.setAttribute('open', '');
                }
            });
        } catch (error) {
            console.error('Failed to load HTML:', error);
        }
    });
})();
