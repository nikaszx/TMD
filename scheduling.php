<?php
    include_once('Connection/connection.php');
    include_once('Classes/user.php');

    $db = new Connection();
    if(isset($_POST['Agendar']) && ($_POST['Agendar']) == 'Agendar') {
        $schedule = new OperationSchedule($db);

        $FULL_NAME = filter_var(trim($_POST['FULL_NAME']), FILTER_SANITIZE_STRING);
        $EMAIL = filter_var(trim($_POST['EMAIL']), FILTER_SANITIZE_EMAIL);
        if (!filter_var($EMAIL, FILTER_VALIDATE_EMAIL)) {
            echo "Por favor, forneça um email válido."; //personalizar alert com javascript
            exit();
        }

        $AGE = $_POST['AGE'];
        if (strlen($AGE) <= 2) {
            echo "Informe uma idade válida."; //personalizar alert com javascript
            exit();
        }

        $SCHEDULING_DATE = $_POST['SCHEDULING_DATE'];

        $conn = $db->getConnection();
        $query = "SELECT * FROM scheduling WHERE full_name = :FULL_NAME AND EMAIL = :EMAIL AND SCHEDULING_DATE = :SCHEDULING_DATE";
        $stmt = $conn->prepare($query);
        $stmt->bindValue(':FULL_NAME', $FULL_NAME);
        $stmt->bindValue(':EMAIL', $EMAIL);
        $stmt->bindValue(':AGE', $AGE);
        $stmt->bindValue(':SCHEDULING_DATE', $SCHEDULING_DATE);
        $stmt->execute();

        if ($stmt->rowCount() > 1) {
            echo "Você já realizou um agendamento previamente!";
            exit();
        }

        $schedule->schedule($FULL_NAME, $EMAIL, $AGE, $SCHEDULING_DATE);
        echo "Agendamento realizado com sucesso!"; //personalizar alert com javascript
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style-scheduling.css">
    <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/nunito" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="icon" type="png" syzes="32x32" href="img/gym-ad/zap-solid-24 (1).png">
    <script defer src="Js/script-scheduling.js"></script>
    <title>Agendamento</title>
</head>
    <body>
        <div class="preloader"></div>
        <header>
            <nav>
                <a href="index.html"><h2>GYM FORCE</h2></a>
                <a href="services.html"><h3>Planos</h3></a>
                <a href="supplements.html"><h3>Suplementos</h3></a>
                <a href="scheduling.html"><h3>Agendamento</h3></a>
            </nav>
        </header>
        <main>
            <form method="POST" action="" autocomplete="off" class="scheduling-form">
                <div class="dumbell">
                    <h4>Realize seu <br> Agendamento!</h4>
                </div>
                <div class="form">
                    <div class="wrap">
                        <input type="text" class="field" name="FULL_NAME" autocomplete="off" required />
                        <label for="FULL_NAME">Nome completo</label>
                    </div>
                    <div class="wrap">
                        <input type="text" class="field" name="EMAIL" autocomplete="off" required />
                        <label for="EMAIL">Email</label>
                    </div>
                    <div class="wrap">
                        <input type="number" class="field" name="AGE" autocomplete="off" required />
                        <label for="AGE">Idade</label>
                    </div>
                    <div class="wrap">
                        <input type="date" class="date-field" name="DATE_SCHEDULING" autocomplete="off" required />
                        <label for="DATE_SCHEDULING">Data do Agendamento</label>
                    </div>
                    <button type="button" class="schedule-button">Agendar</button>
                    <p>
                        Se cadastrando, eu concordo com os
                        <a target="_blank" rel="noreferrer noopener" href="terms.html">Política de privacidade</a> e
                        <a target="_blank" rel="noreferrer noopener" href="terms.html">Orientações</a>
                    </p>
                </div>
                <div class="popup-confirm">
                    <h2>Você tem certeza?</h2>
                    <p class="popupP">Para que não hajam incongruências depois, recomendo que leia os <a target="_blank" rel="noreferrer noopener" href="terms.html">política de privacidade</a> e <a target="_blank" rel="noreferrer noopener" href="terms.html">orientações</a> para agendamento</p>
                    <div class="popup-check">
                        <input type="checkbox" name="confirm_terms" id="confirm_terms">
                        <label for="confirm_terms" class="switch">
                            <span class="slider"></span>
                        </label>
                        <p class="checkP">Eu concordo com os termos de privacidade e li as orientações.</p>
                    </div>
                    <div class="bottom-popup-box">
                        <button type="button" class="denied-button">Cancelar</button>
                        <input type="submit" value="Agendar" name="Agendar" class="confirm-button">
                    </div>
                </div>
                <!-- Verificações em php -->

                <!------------------------->
                <!-- Popups -->
                <div class="alert-error">
                    <span class='bx bx-x'></span>
                    <i class='bx bx-error-circle'></i>
                    <h2>Erro! O agendamento <br>não foi realizado!</h2>
                    <p>Já existe um cadastro para essas informações!</p>
                </div>
                <div class="alert-success">
                    <span class='bx bx-x'></span>
                    <i class='bx bx-check-circle'></i>
                    <h2>Agendamento realizado <br> com sucesso!</h2>
                </div>
                <!------------------------->
                <!-- script para exibição dos popups e fechamento dos popups -->
                <script>
                    // var success = <?php echo ($agendamentoSucesso) ? 'true' : 'false'; ?>;
                    // var error = <?php echo (!$agendamentoSucesso) ? 'true' : 'false'; ?>;
                  
                    // if (success && !error) {
                    //   var popupSuccess = document.querySelector(".alert-success");
                    //   popupSuccess.classList.add("active");
                    //   body.classList.add("active-popup");
                    // } else if (!success && error) {
                    //   var popupError = document.querySelector(".alert-error");
                    //   popupError.classList.add("active");
                    //   body.classList.add("active-popup");
                    // }

                    // var spanSuccess = document.querySelector(".alert-success .bx-x");
                    // var spanError = document.querySelector(".alert-error .bx-x");

                    // if (spanSuccess) {
                    //     spanSuccess.addEventListener("click", function() {
                    //     popupSuccess.classList.remove("active");
                    //     body.classList.remove("active-popup");
                    //     });
                    // }

                    // if (spanError) {
                    //     spanError.addEventListener("click", function() {
                    //     popupError.classList.remove("active");
                    //     body.classList.remove("active-popup");
                    //     });
                    // }
                </script>
            </form>
        </main>
        <footer>
            <div class="contact">
                <a href="#"><i class='bx bxl-instagram'></i></a>
                <a href="#"><i class='bx bxl-twitter'></i></a>
                <a href="#"><i class='bx bxl-whatsapp'></i></a>
                <a href="#"><i class='bx bxl-youtube'></i></a>
                <p>Curtiu? Quer fazer parte do nosso time? <br> Agende sua primeira aula <a class="shortcut" href="scheduling.html">aqui</a></p>
            </div>
        </footer>
    </body>
</html>