import Filter from "./Filter";

const AllCategories = () => {
    return(<div>

        <h1>Вкусная еда с итальянским уклоном!</h1>

        <div className="category">
    
        {['ПИЦЦА', 'ПИЦЦА-ПАСТА', 'ПАСТА', 'ВЕГЕТАРИАНСКИЕ БЛЮДА', 'ВСЕ БЛЮДА'].map(category => <Filter key={category} category={category} />)}
        </div>
        
    </div>)
}

export default AllCategories;