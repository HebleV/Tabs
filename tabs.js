const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    // hide all tabs
    tabPanels.forEach(function(panel){
        panel.hidden = true;
    });

    // make all button unselected
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    });

    // make the clicked button selected
    event.currentTarget.setAttribute('aria-selected', true);

    // find the associated id
    const { id } = event.currentTarget;

    // find the associated tab panel and show it
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
}

tabButtons.forEach(button =>button.addEventListener('click', handleTabClick));