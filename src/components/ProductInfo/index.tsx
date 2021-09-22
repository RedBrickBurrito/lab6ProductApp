import "./index.css";
import { Grid, Paper, Typography, Select, MenuItem, InputLabel, Button } from "@material-ui/core";

/**
 * Product info elements
 * @returns ProductInfo UI elements
 */
const ProductInfo = () => {
    return (
        <div className="productInfo">
            <Grid container className="productGrid" spacing={2}>
                <Grid item lg={4}>
                    <Paper className="largeImage" >
                        <img src="https://dummyimage.com/500x500/000/0011ff" alt="Levi's 501 Original Fit Jeans Jeans para Hombre" />
                    </Paper>
                </Grid>
                <Grid item lg={8} container>

                    <Grid item lg={12}>
                        <Typography className="productName" variant="h1">
                            Levi's 501 Original Fit Jeans Jeans para Hombre
                        </Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Typography>
                            100% algodón, Cierre de Cremallera, Lavar a máquina, Jeans corte ajustado, Pierna ajustada, Stretch especial que te brinda mayor movilidad
                        </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography className="dollars crossedout">
                            1027.24
                        </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography className="dollars">
                            706.93
                        </Typography>
                    </Grid>
                    <Grid item lg={8} />
                    <Grid item lg={2}>
                        <InputLabel id="color-label" className="productLabel">Select color</InputLabel>
                        <Select
                            className="selectLabel"
                            labelId="color-label"
                            id="color-select"
                            label="color"
                        >
                            <MenuItem value="BLK">Black</MenuItem>
                            <MenuItem value="BLU">Blue</MenuItem>
                            <MenuItem value="BWN">Brown</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item lg={2}>
                        <InputLabel id="size-label" className="productLabel">Select size</InputLabel>
                        <Select
                            className="selectLabel"
                            labelId="size-label"
                            id="size-select"
                            label="Size"
                        >
                            <MenuItem value="30x32">30x32</MenuItem>
                            <MenuItem value="33x30">33x30</MenuItem>
                            <MenuItem value="32x32">32x32</MenuItem>
                            <MenuItem value="34x32">34x32</MenuItem>
                            <MenuItem value="36x32">36x32</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item lg={8} />
                    <Grid item lg={2}>
                        <InputLabel id="quantity-label" className="productLabel">Select quantity</InputLabel>
                        <Select
                            className="selectLabel"
                            labelId="quantity-label"
                            id="quantity-select"
                            label="quantity"
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item lg={10} />

                    <Grid item lg={4}>
                        <Button variant="contained" className="addCartButton">Add to cart</Button>
                    </Grid>
                    <Grid item lg={12} />
                </Grid>
            </Grid>
        </div>
    )
}
export default ProductInfo;