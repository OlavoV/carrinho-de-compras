'use client'
import React, { useState } from 'react'
import Link from 'next/link'; // Importar o componente Link
import '../MarketCar/marketcar.css'



interface ICurso {
    id: number,
    titulo: string,
    preco: number,
    imageUrl: string,


}

interface IShoppingItem{
    produto: ICurso,
    quantidade: number
}

const cursos: ICurso[] = [
    {id:1, titulo:'Iphone 12', preco: 3500.00, imageUrl: '/Images/iphone12.jpg'},
    {id:2, titulo:'Samsung S23', preco: 4000.00, imageUrl: '/Images/samsungs23.jpg'},
    {id:3, titulo:'Iphone 14', preco: 4500.00, imageUrl: '/Images/iphone14.jpg'},
    {id:4, titulo:'Samsung S22', preco: 2900.00, imageUrl: '/Images/samsungs22.jpg'}
]
const formatarPreco = (preco: number): string => preco.toFixed(2);
const CarMarketPage = () => {
  const[shoppingCurso, setShoppingCurso] = useState<IShoppingItem[]>([])
  const handleAddCurso = (id:number) => {
    const curso = cursos.find((curso)=> curso.id === id)
    const cursoExisteShopping = shoppingCurso.find(item => item.produto.id ===id)

    if(cursoExisteShopping){
        const newShoppingCurso:IShoppingItem[] = shoppingCurso.map(item =>{
            if(item.produto.id === id)({
                ...item,
                quantidade:item.quantidade++
            })

return item
        })
       setShoppingCurso(newShoppingCurso)
       return
    
    }
    
    const carItem: IShoppingItem ={
        produto: curso!,
        quantidade:1
    }

    const newShoppingCurso:IShoppingItem[] = [...shoppingCurso, carItem]
    setShoppingCurso(newShoppingCurso)

  }

  const handleRemoveCurso = (id:number) => {
const cursoExisteShopping = shoppingCurso.find((item) => item.produto.id === id)

if(cursoExisteShopping!.quantidade>1){
    const newShoppingCurso:IShoppingItem[] = shoppingCurso.map(item =>{
        if(item.produto.id === id)({
            ...item,
            quantidade:item.quantidade--
        })

return item
    })
   setShoppingCurso(newShoppingCurso)
   return

   


}
const newShoppingCurso: IShoppingItem[] = shoppingCurso.filter(item => item.produto.id !== id)
setShoppingCurso(newShoppingCurso)




  }
  
  const totalCurso = shoppingCurso.reduce((total, precoAtual) => {
    return total + (precoAtual.produto.preco * precoAtual.quantidade)
  },0);
  
  
  return (
    <div className='container'>
        <h1>OCell</h1>     
    <ul>
        {cursos.map(curso =>(
        <li key={curso.id} className='produto-item'>
            <img src={curso.imageUrl} alt={curso.titulo} className='produto-imagem' />
            <div className='produto-info'>
            <p className='tituloprod'>{curso.titulo}</p>
            <p> R${formatarPreco(curso.preco)}</p>
            <Link href="/config" className='link-config'>
                Ir para Configurações
            </Link>
            <button onClick={() =>handleAddCurso(curso.id)} className='botaoAdd'>Adicionar</button>
            </div>
          
        </li>))}
    </ul>
    <div className='carrinho-header'>
    <h1>Carrinho de compras: R${formatarPreco(totalCurso)}</h1>
    <ul>
        {shoppingCurso.map(item =>(
        <li key={item.produto.id} className='carrinho-item'>
            <img src={item.produto.imageUrl} alt={item.produto.titulo} className='produto-imagem' />
            <div className='produto-info'>
            <p>{item.produto.titulo}</p>
            <p>Quantidade:{item.quantidade}</p>
            <p>Total: R${formatarPreco(item.produto.preco * item.quantidade)}</p>
            <button onClick={() => handleRemoveCurso(item.produto.id)} className='botaoRemove'>Remover</button>
            </div>
            
        </li>))}
    </ul>
    </div>
    
    </div>
  )
}

export default CarMarketPage