import Button from "components/Button";
import Header from "components/Header";
import { useSelector } from "react-redux";
import styles from './Anuncie.module.scss';
import { useForm } from 'react-hook-form';

export default function Anuncie() {
    const categoria = useSelector(state => state.categorias.map(({nome, id}) => ({nome, id})));
    const { register, handleSubmit } = useForm();

    function cadastrar(paramentro) {
      console.log("parametro: ", paramentro)
    }

  return (
    <div className={styles.container}>
      <Header
        titulo="Ancie aqui!"
        descricao="Anuncie seu produto nomelhor site do Brasil!"
      />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <input {...register('nome')} placeholder="Nome do produto" alt="nome do produto"/>
        <input {...register('produto')} placeholder="Descrição do produto" alt="descricao do produto"/>
        <input {...register('descricao')}placeholder="Descrição do produto" alt="descricao do produto"/>
        <input {...register('imagem')}placeholder="Url da imagem do produto" alt="url da imagem do produto"/>
        <select {...register('categoria')}>
            <option value='' disable>Selecione a categoria</option>
            {categoria.map(categoria => (
                <option key={categoria.i} value={categoria.id}>
                    {categoria.nome}
                </option>
            ))}
        </select>
        <input {...register('preco')} type="number" placeholder="Preço do produto" />
        <Button type="submit">Cadastrar Produto</Button>
      </form>
    </div>
  );
}
