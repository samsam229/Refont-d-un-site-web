let preveiwboite = document.querySelector('.products-preview');
let previewBox = preveiwboite.querySelectorAll('.preview');

document.querySelectorAll('.products-boite .product').forEach(product =>{
    product.onclick = () =>{
        preveiwboite.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        preveiwboite.style.display = 'none';
    };
});
