var produtos = {
    index : 0,
    tBody: document.getElementById('lstProdBody'),
    pedidos: {}, 
	adicionar: function(e) {
        // Impede de submeter a página.
        e.preventDefault();
    	
        var prod = document.getElementById('produto'),
            qtd = document.getElementById('quantidade');
        
        // Cria estrutura de elementos para adicionar a tabela.
        var tr     = document.createElement('tr'),
           	tdProd = document.createElement('td'),
            tdQtd  = document.createElement('td'),
            tdBtn  = document.createElement('td'),
            btn    = document.createElement('button');
        
        // Faz o aninhamento dos elementos, atribui os valores adicionados e acrescenta a tabela.
        tdProd.textContent = prod.value;
        tdQtd.textContent = qtd.value;
        
        // Limpa campos.
        prod.value = '';
        qtd.value = '';
        
        btn.setAttribute('onclick', 'produtos.excluir(event, this);');
        btn.textContent = 'Excluir';
        
        tdBtn.appendChild(btn);
        
        tr.appendChild(tdProd);
        tr.appendChild(tdQtd);
        tr.appendChild(tdBtn);
        
       	this.tBody.appendChild(tr);
    },
    excluir: function(e, elem) {
        // Impede de submeter a página.
        e.preventDefault();
        
        // Pega o elemento pai do elemento pai do botão e deleta da tabela.
        var a = elem.parentElement.parentElement;
        this.tBody.removeChild(a);
    },
    send: function(e) {
        // Impede de submeter a página.
        e.preventDefault();
        
        // Pega os valores de cada linha da tabela inclui em uma array, apos isto, adiciona no objeto pedidos.
        var pedido = [];
        
        Array.prototype.forEach.call(this.tBody.children, function(arr, index) {
            pedido.push({'produto': arr.children[0].textContent, 'quantidade': arr.children[1].textContent});
        });
        
        this.pedidos = { "pedido" : pedido };
        
        console.log(this.pedidos);
    }
}
