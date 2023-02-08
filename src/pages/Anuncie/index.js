import Button from "components/Button";
import Header from "components/Header";
import { useDispatch, useSelector } from "react-redux";
import styles from './Anuncie.module.scss';
import { useForm } from 'react-hook-form';
import { cadastrarItem } from "store/reducers/itens";
import { useParams } from "react-router-dom";

export default function Anuncie() {
    const dispatch = useDispatch();
    const { nomeCategoria = ''} = useParams();
    const categorias = useSelector(state => state.categorias.map(({nome, id}) => ({nome, id})));
    const { register, handleSubmit } = useForm( {
      defaultValues: {
        categoria: nomeCategoria,
      }
    });

    function cadastrar(data) {
      dispatch(cadastrarItem(data))
    }

  return (
    <div className={styles.container}>
      <Header
        titulo="Ancie aqui!"
        descricao="Anuncie seu produto nomelhor site do Brasil!"
      />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <input {...register('titulo', { required: true })} placeholder="Nome do produto" alt="nome do produto"/>
        <input {...register('produto', { required: true })} placeholder="Descrição do produto" alt="descricao do produto"/>
        <input {...register('descricao', { required: true })}placeholder="Descrição do produto" alt="descricao do produto"/>
        <input {...register('foto', { required: true })}placeholder="Url da imagem do produto" alt="url da imagem do produto"/>
        <select {
          ...register('categoria', { required: true })}
          disabled={nomeCategoria}
        >
            <option value='' disabled>Selecione a categoria</option>
            {categorias.map(categoria => (
                <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                </option>
            ))}
        </select>
        <input {...register('preco', { required: true, valueAsNumber: true })} type="number" placeholder="Preço do produto" />
        <Button type="submit">Cadastrar Produto</Button>
      </form>
    </div>
  );
}
