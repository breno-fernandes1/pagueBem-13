import { Button, TextField, Card, CardContent, Typography, Checkbox, FormControlLabel, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LineChart, Line } from 'recharts';

const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 239, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 349, pv: 4300, amt: 2100 }
];

export default function IndiceCard() {
    return (
        <div>       
            <Card
                sx={{ 
                    margin: 'auto', 
                    padding: 3, 
                    mt: '10px',
                }}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography 
                        variant="h5" 
                        component="div" 
                        gutterBottom 
                        sx={{ mb: 4 }} // Espaçamento abaixo do título
                    >
                        Índices de Reputação
                    </Typography>

                    <Button 
                        variant="contained" 
                        color="success" 
                        sx={{ mb: 4 }} // Espaçamento abaixo do botão
                    >
                        Filtrar os índices
                    </Button>

                    <TextField
                        variant="outlined"
                        placeholder="Pesquisar"
                        sx={{ mb: 4, width: 'fit-content', minWidth: '200px' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Selecionar todos"
                        sx={{ display: 'block', mb: 1 }} // Espaçamento entre checkboxes
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Indice do cliente"
                        sx={{ display: 'block', mb: 1 }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Indice total do cliente"
                        sx={{ display: 'block', mb: 1 }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Indice de pagamento"
                        sx={{ display: 'block', mb: 1 }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Indice de regularidade"
                        sx={{ display: 'block', mb: 1 }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Indice de interatividade"
                        sx={{ display: 'block', mb: 1 }}
                    />
                    
                    {/* Container para os gráficos lado a lado */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                        <LineChart width={400} height={400} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        </LineChart>
                        <LineChart width={400} height={400} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        </LineChart>
                        <LineChart width={400} height={400} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        </LineChart>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}
