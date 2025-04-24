document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-cookies')
    const buttonAccept = document.getElementById('accept-cookies')
    const buttonReject = document.getElementById('reject-cookies')

    // Función para mostrar el modal
    const showModal = () => {
        if (modal) modal.style.display = 'block'
    }
    
    const closeModal = () => {
        if (modal) modal.style.display = 'none'
    }
    
    // Función para ocultar el modal
    const hideModal = () => {
        if (modal) modal.style.display = 'none'
    }

    // Función para guardar la preferencia de cookies
    const saveCookiePreference = (accepted) => {
        localStorage.setItem('cookiesAccepted', accepted)
        hideModal()
    }

    // Eventos de click para los botones
    if (buttonAccept) {
        buttonAccept.addEventListener('click', () => saveCookiePreference(true))
        
            
    }else{console.log('Cookies Rechazadas')}
   
    
    if (buttonReject) {
        buttonReject.addEventListener('click', () => saveCookiePreference(false))
        buttonReject.addEventListener('click', () => {
            hideModal()
        })

    }

    // Verificar si ya se ha tomado una decisión sobre las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (cookiesAccepted === null) {
        showModal()
    }
})
