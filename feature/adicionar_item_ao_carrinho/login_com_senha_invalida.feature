Cenário: Login com senha inválida
  Quando eu informar o usuário "<usuario>"
  E informar a senha "<senha>"
  E clicar no botão de login
  Então deve ser exibida a mensagem de erro "<mensagem_erro>"

Exemplos:
  | usuario     | senha          | mensagem_erro                                                                 |
  | user1_ebac  | senha@invalida | Erro: A senha fornecida para o usuário user1_ebac está incorreta. Perdeu a senha? |

