import Button from "components/Button";
import Header from "components/Header";
import { useSelector } from "react-redux";
import styles from './Anuncie.module.scss';

export default function Anuncie() {
    const categoria = useSelector(state => state.categorias.map(({nome, id}) => ({nome, id})));
  return (
    <div className={styles.container}>
      <Header
        titulo="Ancie aqui!"
        descricao="Anuncie seu produto nomelhor site do Brasil!"
      />
      <form className={styles.formulario}>
        <input placeholder="Nome do produto" alt="nome do produto"/>
        <input placeholder="Descrição do produto" alt="descricao do produto"/>
        <input placeholder="Descrição do produto" alt="descricao do produto"/>
        <input placeholder="Url da imagem do produto" alt="url da imagem do produto"/>
        <select>
            <option value='' disable>Selecione a categoria</option>
            {categoria.map(categoria => (
                <option key={categoria.i} value={categoria.id}>
                    {categoria.nome}
                </option>
            ))}
        </select>
        <input type="number" placeholder="Preço do produto" />
        <Button type="submit">Cadastrar Produto</Button>
      </form>
    </div>
  );
}
