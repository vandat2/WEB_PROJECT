
//Toast message
function toast({
    title = '',
    message = '',
    type = '', 
    duration = 2000
}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');
        
        timeoutId = setTimeout(function(){
            main.removeChild(toast);
        },duration+1000);
        
        toast.onclick = function(e){
            if(e.target.closest('.fa-times')){
                main.removeChild(toast);
                clearTimeout(timeoutId);
            }
        }
        const colors = {
            success: '#28a745',
            warning: '#ffc107'
        }
        const icons = {
            success: 'fa fa-check',
            warning: 'fa fa-exclamation-triangle'
        };
        const color = colors[type];
        const icon = icons[type];
        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = `<div class="toast__private">
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">
                ${message}
            </p>
        </div>
        <div class="toast__close">
        <i class="fa fa-times"></i>
    </div>
    </div>
    <div class="toast__background"style="background-color: ${color};">
    </div>`
    main.appendChild(toast);
    }
}

