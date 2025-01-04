<?php

namespace Drupal\contact_form_handler\Service;

use Drupal\Core\Entity\EntityTypeManagerInterface;

class MessageStorageService {
  protected $entityTypeManager;

  public function __construct(EntityTypeManagerInterface $entityTypeManager) {
    $this->entityTypeManager = $entityTypeManager;
  }

  public function saveMessage($name, $email, $message) {
    $node = $this->entityTypeManager->getStorage('node')->create([
      'type' => 'message', // Ensure you have a content type 'message'.
      'title' => 'Message from ' . $name,
      'field_email' => $email,
      'field_message' => $message,
      'status' => 0, // Unpublished by default.
    ]);
    $node->save();
  }
}
