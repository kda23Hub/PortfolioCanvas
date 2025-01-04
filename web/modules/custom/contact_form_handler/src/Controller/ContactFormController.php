<?php

namespace Drupal\contact_form_handler\Controller;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\contact_form_handler\Service\MessageStorageService;

class ContactFormController extends ControllerBase {
  protected $messageStorage;

  public function __construct(MessageStorageService $messageStorage) {
    $this->messageStorage = $messageStorage;
  }

  public static function create(ContainerInterface $container) {
    return new static($container->get('contact_form_handler.message_storage'));
  }

  public function submitForm(Request $request) {
    $name = $request->request->get('name');
    $email = $request->request->get('email');
    $message = $request->request->get('message');

    $this->messageStorage->saveMessage($name, $email, $message);

    return new RedirectResponse('/');
  }
}
