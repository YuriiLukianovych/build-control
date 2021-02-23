(() => {
   const refs = {
     openModalBtn: document.querySelector('[data-modal-open]'),
     closeModalBtn: document.querySelector('[data-modal-close]'),
     modal: document.querySelector('[data-modal]'),
     bodyh: document.querySelector('[data-body]'),
   };
 
   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.closeModalBtn.addEventListener('click', toggleModal);
 
   function toggleModal() {
     refs.modal.classList.toggle('is-hidden');
     refs.bodyh.classList.toggle('is-blocked');
   }
 })();